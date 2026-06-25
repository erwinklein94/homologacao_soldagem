// =====================================================================
// app.js — núcleo compartilhado por todas as páginas
// Cliente Supabase, sessão/perfil, guardas de acesso (admin/aluno),
// cabeçalho com navegação por papel e utilitários.
// =====================================================================

// ---- Cliente Supabase (UMD global vindo do CDN) ----
function criarCliente() {
  const cfg = window.SUPABASE_CONFIG || {};
  const url = cfg.url || "";
  // Aceita a nova chave "publishable" (sb_publishable_...) e, por compatibilidade,
  // o nome antigo "anonKey". Ambas são seguras no navegador (o RLS protege os dados).
  const key = cfg.publishableKey || cfg.anonKey || "";
  if (!url || url.includes("SEU-PROJETO") || !key || key.includes("COLE-AQUI")) {
    return null; // ainda não configurado
  }
  return window.supabase.createClient(url, key);
}
const sb = criarCliente();
window.sb = sb;

// Banner amigável quando o config.js não foi preenchido.
function exigeConfig() {
  if (sb) return true;
  const alvo = document.querySelector("[data-config-aviso]") || document.body;
  const box = document.createElement("div");
  box.className = "alerta alerta--aviso";
  box.style.margin = "1rem auto";
  box.style.maxWidth = "680px";
  box.innerHTML =
    "<div><b>Falta configurar o Supabase.</b><br>" +
    "Abra <code>js/config.js</code> e preencha <code>url</code> e <code>anonKey</code> " +
    "com os dados do seu projeto (Project Settings &gt; API). Depois recarregue a página.</div>";
  alvo.prepend(box);
  return false;
}
window.exigeConfig = exigeConfig;

// ---- Sessão e perfil ----
async function getSessao() {
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session || null;
}

let _perfilCache = null;
async function getPerfil() {
  if (_perfilCache) return _perfilCache;
  const sessao = await getSessao();
  if (!sessao) return null;
  const { data, error } = await sb
    .from("profiles")
    .select("id, nome, matricula, role")
    .eq("id", sessao.user.id)
    .single();
  if (error) { console.error("Erro ao carregar perfil:", error.message); return null; }
  _perfilCache = { ...data, email: sessao.user.email };
  return _perfilCache;
}
window.getSessao = getSessao;
window.getPerfil = getPerfil;

// ---- Guardas de acesso ----
// Em toda página protegida: sem sessão -> volta ao login.
// requerAdmin: além de logado, precisa ser admin; senão é mandado para a área do aluno.
async function protegerPagina({ requerAdmin = false } = {}) {
  if (!exigeConfig()) return null;
  const perfil = await getPerfil();
  if (!perfil) { window.location.replace("index.html"); return null; }
  if (requerAdmin && perfil.role !== "admin") {
    window.location.replace("prova.html");
    return null;
  }
  montarCabecalho(perfil);
  return perfil;
}
window.protegerPagina = protegerPagina;

// ---- Cabeçalho com navegação por papel ----
// Alunos NÃO recebem (nem veem referência a) páginas de administrador.
function montarCabecalho(perfil) {
  const host = document.querySelector("[data-topbar]");
  if (!host) return;
  const atual = location.pathname.split("/").pop() || "index.html";
  const ehAdmin = perfil.role === "admin";

  const linksAdmin = [
    ["dashboard.html", "Painel"],
    ["admin.html", "Dados &amp; provas"],
    ["prova.html", "Aplicar prova"],
  ];
  const linksAluno = [
    ["prova.html", "Fazer prova"],
    ["perfil.html", "Meu perfil"],
  ];
  const links = (ehAdmin ? linksAdmin : linksAluno)
    .map(([href, txt]) => `<a href="${href}"${href === atual ? ' class="is-active"' : ""}>${txt}</a>`)
    .join("");

  const inicial = (perfil.nome || perfil.email || "?").trim().charAt(0).toUpperCase();
  const papel = ehAdmin
    ? '<span class="badge-role badge-role--admin">Administrador</span>'
    : '<span class="badge-role">Aluno</span>';

  host.innerHTML = `
    <div class="topbar__inner">
      <a class="brand" href="${ehAdmin ? "dashboard.html" : "prova.html"}">
        <img src="assets/rumo-logo-branco.png" alt="Rumo" />
        <span class="brand__sep"></span>
        <span class="brand__app">Homologação de Solda<span>Soldagem Aluminotérmica</span></span>
      </a>
      <nav class="nav" aria-label="Navegação principal">${links}</nav>
      <div class="user-chip">
        <div class="user-chip__name">
          <b>${escaparHtml(perfil.nome || perfil.email)}</b>
          ${papel}
        </div>
        <button class="btn btn--ghost btn--sm" data-sair>Sair</button>
      </div>
    </div>`;

  host.querySelector("[data-sair]").addEventListener("click", sair);
}
window.montarCabecalho = montarCabecalho;

async function sair() {
  if (sb) await sb.auth.signOut();
  _perfilCache = null;
  window.location.replace("index.html");
}
window.sair = sair;

// ---- Utilitários ----
function escaparHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
window.escaparHtml = escaparHtml;

function fmtData(iso, comHora = true) {
  if (!iso) return "—";
  const d = new Date(iso);
  const data = d.toLocaleDateString("pt-BR");
  if (!comHora) return data;
  return data + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
window.fmtData = fmtData;

function fmtNota(n) {
  return Number(n).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
window.fmtNota = fmtNota;

// Identificador curto e legível para o certificado.
function gerarCodigoCert(tentativaId) {
  const base = (tentativaId || crypto.randomUUID()).replace(/-/g, "").toUpperCase();
  return "HSA-" + base.slice(0, 8);
}
window.gerarCodigoCert = gerarCodigoCert;
