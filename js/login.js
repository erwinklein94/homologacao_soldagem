// =====================================================================
// login.js — página inicial (index.html)
// Dois cards: Administrador e Aluno. O aluno pode criar o primeiro acesso
// e, depois, entrar com o mesmo e-mail. O destino é definido pelo papel.
// =====================================================================

document.addEventListener("DOMContentLoaded", async () => {
  if (!window.exigeConfig()) return;

  // Se já houver sessão ativa, vai direto para a área certa.
  const sessao = await getSessao();
  if (sessao) { await rotaPorPapel(); return; }

  ligarAbas();
  ligarFormAdmin();
  ligarFormAlunoLogin();
  ligarFormAlunoCriar();
});

// Lê o papel do usuário e redireciona. Admin -> Painel; Aluno -> Prova.
async function rotaPorPapel() {
  const perfil = await getPerfil();
  if (!perfil) { msg("[data-msg-admin]", "erro", "Não foi possível carregar seu perfil."); return; }
  window.location.replace(perfil.role === "admin" ? "dashboard.html" : "prova.html");
}

function ligarAbas() {
  const abas = document.querySelectorAll("[data-tab]");
  abas.forEach((b) => b.addEventListener("click", () => {
    abas.forEach((x) => x.classList.toggle("is-active", x === b));
    const alvo = b.dataset.tab;
    document.querySelectorAll("[data-painel]").forEach((p) =>
      p.classList.toggle("hidden", p.dataset.painel !== alvo));
  }));
}

function ligarFormAdmin() {
  const f = document.querySelector("[data-form-admin]");
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = f.querySelector("button[type=submit]");
    travar(btn, true, "Entrando…");
    msg("[data-msg-admin]", null);
    const { error } = await sb.auth.signInWithPassword({
      email: f.email.value.trim(), password: f.senha.value,
    });
    if (error) { msg("[data-msg-admin]", "erro", traduzErro(error)); travar(btn, false); return; }
    await rotaPorPapel();
  });
}

function ligarFormAlunoLogin() {
  const f = document.querySelector("[data-form-aluno-login]");
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = f.querySelector("button[type=submit]");
    travar(btn, true, "Entrando…");
    msg("[data-msg-aluno-login]", null);
    const { error } = await sb.auth.signInWithPassword({
      email: f.email.value.trim(), password: f.senha.value,
    });
    if (error) { msg("[data-msg-aluno-login]", "erro", traduzErro(error)); travar(btn, false); return; }
    await rotaPorPapel();
  });
}

function ligarFormAlunoCriar() {
  const f = document.querySelector("[data-form-aluno-criar]");
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg("[data-msg-aluno-criar]", null);
    if (f.senha.value.length < 6) {
      return msg("[data-msg-aluno-criar]", "erro", "A senha precisa ter ao menos 6 caracteres.");
    }
    if (f.senha.value !== f.senha2.value) {
      return msg("[data-msg-aluno-criar]", "erro", "As senhas não conferem.");
    }
    const btn = f.querySelector("button[type=submit]");
    travar(btn, true, "Criando acesso…");

    const { data, error } = await sb.auth.signUp({
      email: f.email.value.trim(),
      password: f.senha.value,
      options: { data: { nome: f.nome.value.trim(), matricula: f.matricula.value.trim() } },
    });
    if (error) { msg("[data-msg-aluno-criar]", "erro", traduzErro(error)); travar(btn, false); return; }

    if (data.session) {
      // Confirmação de e-mail desativada: já está logado.
      await rotaPorPapel();
    } else {
      // Confirmação de e-mail ativada: precisa confirmar antes de entrar.
      msg("[data-msg-aluno-criar]", "ok",
        "Acesso criado! Enviamos um e-mail de confirmação. Confirme e depois entre na aba “Entrar”.");
      travar(btn, false, "Criar primeiro acesso");
    }
  });
}

// ---- helpers de UI ----
function travar(btn, on, txt) {
  if (!btn) return;
  btn.disabled = on;
  if (txt) btn.textContent = txt;
}
function msg(sel, tipo, texto) {
  const el = document.querySelector(sel);
  if (!el) return;
  if (!tipo) { el.className = "hidden"; el.textContent = ""; return; }
  el.className = "alerta alerta--" + tipo;
  el.style.marginTop = ".8rem";
  el.textContent = texto;
}
function traduzErro(error) {
  const m = (error && error.message) || "Erro inesperado.";
  if (/invalid login credentials/i.test(m)) return "E-mail ou senha incorretos.";
  if (/already registered|already been registered/i.test(m)) return "Este e-mail já tem acesso. Use a aba “Entrar”.";
  if (/email.+confirm/i.test(m)) return "Confirme seu e-mail antes de entrar.";
  if (/rate limit/i.test(m)) return "Muitas tentativas. Aguarde um instante e tente de novo.";
  return m;
}
