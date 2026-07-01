// =====================================================================
// admin.js — página exclusiva do Administrador (admin.html)
// 1) Atividades: todas as tentativas dos alunos (nota, data, instrutor) com filtros.
// 2) Provas & questões: editor para criar/alterar provas e suas questões.
// Inclui o botão que carrega as provas padrão da área (window.PROVAS_SEEDS).
// =====================================================================

const adm = {
  perfil: null,
  provas: [],          // lista de provas (id, codigo, titulo, ...)
  tentativas: [],      // todas as tentativas (admin enxerga tudo via RLS)
  provaSel: null,      // prova aberta no editor
  questoes: [],        // questões da prova aberta (estado editável em memória)
};

document.addEventListener("DOMContentLoaded", async () => {
  const perfil = await protegerPagina({ requerAdmin: true });
  if (!perfil) return;
  adm.perfil = perfil;

  ligarAbas();
  await Promise.all([carregarProvas(), carregarTentativas()]);

  conferirSeed();
  renderAtividades();
  renderListaProvas();
});

// --------------------------------------------------------------- carga
async function carregarProvas() {
  const { data, error } = await sb
    .from("provas")
    .select("*")
    .eq("area", adm.perfil.area)
    .order("codigo");
  if (error) { console.error(error); adm.provas = []; return; }
  adm.provas = data || [];
}

async function carregarTentativas() {
  const { data, error } = await sb
    .from("tentativas")
    .select("*")
    .eq("area", adm.perfil.area)
    .order("realizado_em", { ascending: false });
  if (error) { console.error(error); adm.tentativas = []; return; }
  adm.tentativas = data || [];
}

// --------------------------------------------------------------- abas
function ligarAbas() {
  const abas = document.querySelectorAll("[data-aba]");
  abas.forEach((b) => b.addEventListener("click", () => {
    abas.forEach((x) => x.classList.toggle("is-active", x === b));
    const alvo = b.dataset.aba;
    document.querySelectorAll("[data-painel-aba]").forEach((p) =>
      p.classList.toggle("hidden", p.dataset.painelAba !== alvo));
  }));
}

// =====================================================================
// 1) ATIVIDADES DOS ALUNOS
// =====================================================================
function renderAtividades() {
  const host = document.querySelector("[data-atividades]");
  const provasUnicas = [...new Set(adm.tentativas.map((t) => t.prova_titulo))].sort();
  const opcoesProva = ['<option value="">Todas as provas</option>']
    .concat(provasUnicas.map((p) => `<option value="${escaparHtml(p)}">${escaparHtml(p)}</option>`))
    .join("");

  host.innerHTML = `
    <div class="card stack">
      <div class="toolbar">
        <div class="field" style="margin:0;flex:1;min-width:200px">
          <label for="f-aluno">Buscar aluno</label>
          <input id="f-aluno" class="input" placeholder="Nome do aluno…" data-filtro-aluno />
        </div>
        <div class="field" style="margin:0;min-width:220px">
          <label for="f-prova">Prova</label>
          <select id="f-prova" class="select" data-filtro-prova>${opcoesProva}</select>
        </div>
        <div class="field" style="margin:0;min-width:170px">
          <label for="f-result">Resultado</label>
          <select id="f-result" class="select" data-filtro-result>
            <option value="">Todos</option>
            <option value="ok">Aprovados</option>
            <option value="reprov">Reprovados</option>
          </select>
        </div>
      </div>
      <div data-tabela-atividades></div>
    </div>`;

  const aplicar = () => desenharTabelaAtividades(
    host.querySelector("[data-filtro-aluno]").value.trim().toLowerCase(),
    host.querySelector("[data-filtro-prova]").value,
    host.querySelector("[data-filtro-result]").value
  );
  host.querySelector("[data-filtro-aluno]").addEventListener("input", aplicar);
  host.querySelector("[data-filtro-prova]").addEventListener("change", aplicar);
  host.querySelector("[data-filtro-result]").addEventListener("change", aplicar);
  aplicar();
}

function desenharTabelaAtividades(fAluno, fProva, fResult) {
  const host = document.querySelector("[data-tabela-atividades]");
  let linhas = adm.tentativas.filter((t) => {
    if (fAluno && !(t.aluno_nome || "").toLowerCase().includes(fAluno)) return false;
    if (fProva && t.prova_titulo !== fProva) return false;
    if (fResult === "ok" && !t.aprovado) return false;
    if (fResult === "reprov" && t.aprovado) return false;
    return true;
  });

  if (linhas.length === 0) {
    host.innerHTML = `<p class="muted center" style="padding:1.4rem 0">Nenhuma tentativa encontrada com esses filtros.</p>`;
    return;
  }

  const corpo = linhas.map((t) => {
    const badge = t.aprovado
      ? '<span class="badge badge--ok badge--dot">Aprovado</span>'
      : '<span class="badge badge--erro badge--dot">Reprovado</span>';
    return `<tr>
      <td>${escaparHtml(t.aluno_nome)}</td>
      <td>${escaparHtml(t.prova_titulo)}</td>
      <td><b>${fmtNota(t.nota)}</b> <span class="muted small">(${t.acertos}/${t.total})</span></td>
      <td>${badge}</td>
      <td>${escaparHtml(t.instrutor_nome)}</td>
      <td class="nowrap">${fmtData(t.realizado_em)}</td>
    </tr>`;
  }).join("");

  host.innerHTML = `
    <p class="muted small" style="margin:.2rem 0 .6rem">${linhas.length} registro(s)</p>
    <div class="tabela-wrap">
      <table class="tabela">
        <thead><tr>
          <th>Aluno</th><th>Prova</th><th>Nota</th><th>Resultado</th><th>Instrutor</th><th>Data</th>
        </tr></thead>
        <tbody>${corpo}</tbody>
      </table>
    </div>`;
}

// =====================================================================
// 2) PROVAS & QUESTÕES (editor)
// =====================================================================
function obterSeedArea() {
  return Array.isArray(window.PROVAS_SEED) ? window.PROVAS_SEED : [];
}

function nomeAreaAtual() {
  const meta = window.getAreaMeta ? window.getAreaMeta(adm.perfil?.area) : null;
  return meta?.titulo || "esta área";
}

function conferirSeed() {
  const banner = document.querySelector("[data-seed-banner]");
  if (!banner) return;
  const semProvas = adm.provas.length === 0;
  const seedArea = obterSeedArea();
  const temSeed = Array.isArray(seedArea) && seedArea.length > 0;
  banner.classList.toggle("hidden", !(semProvas && temSeed));
  if (semProvas && temSeed) {
    banner.innerHTML = `
      <div class="alerta alerta--info" style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
        <div style="flex:1;min-width:240px">
          <b>Nenhuma prova cadastrada em ${escaparHtml(nomeAreaAtual())}.</b><br>
          Carregue as ${seedArea.length} provas padrão desta área no Supabase (você poderá editar tudo depois).
        </div>
        <button class="btn btn--primary" data-btn-seed>Carregar provas padrão da área</button>
      </div>`;
    banner.querySelector("[data-btn-seed]").addEventListener("click", (evt) => carregarSeed(evt));
  }
}

async function carregarSeed(e, opcoes = {}) {
  const btn = e?.target;
  const substituirArea = !!opcoes.substituirArea;
  const seedArea = obterSeedArea();
  if (!seedArea.length) {
    alert("Não há provas padrão configuradas para " + nomeAreaAtual() + ".");
    return;
  }
  travarBtn(btn, true, substituirArea ? "Substituindo…" : "Carregando…");
  try {
    if (substituirArea) {
      const { error: e0 } = await sb.from("provas").delete().eq("area", adm.perfil.area);
      if (e0) throw e0;
    }

    for (const p of seedArea) {
      // Cria/atualiza a prova pelo código (único por área) e devolve o id.
      const registroProva = { area: adm.perfil.area, codigo: p.codigo, titulo: p.titulo, descricao: p.descricao, nota_minima: p.nota_minima, ativo: true, atualizado_em: new Date().toISOString() };
      const { data: prova, error: e1 } = await sb
        .from("provas")
        .upsert(registroProva, { onConflict: "area,codigo" })
        .select().single();
      if (e1) throw e1;

      // Substitui as questões dessa prova.
      const { error: eDel } = await sb.from("questoes").delete().eq("prova_id", prova.id);
      if (eDel) throw eDel;
      const questoes = p.questoes.map((q) => ({
        prova_id: prova.id, ordem: q.ordem, enunciado: q.enunciado,
        alternativas: q.alternativas, correta: q.correta, justificativa: q.justificativa || "",
      }));
      const { error: e2 } = await sb.from("questoes").insert(questoes);
      if (e2) throw e2;
    }
    await Promise.all([carregarProvas(), carregarTentativas()]);
    conferirSeed();
    renderAtividades();
    renderListaProvas();
    alert(substituirArea ? "Provas da área substituídas com sucesso!" : "Provas carregadas com sucesso!");
  } catch (err) {
    console.error(err);
    alert("Não foi possível carregar as provas: " + (err.message || err));
    travarBtn(btn, false, substituirArea ? "Substituir provas da área" : "Carregar provas padrão da área");
  }
}

function renderListaProvas() {
  const host = document.querySelector("[data-editor]");
  if (adm.provas.length === 0) {
    host.innerHTML = `
      <div class="card center">
        <h3>Nenhuma prova cadastrada</h3>
        <p class="muted">Use o botão acima para carregar as provas padrão da área, ou crie uma nova.</p>
        <button class="btn btn--primary" data-nova-prova>Criar prova em branco</button>
      </div>`;
    host.querySelector("[data-nova-prova]").addEventListener("click", criarProvaVazia);
    return;
  }

  const cards = adm.provas.map((p) => `
    <div class="row" style="align-items:center;justify-content:space-between;border:1px solid var(--borda);border-radius:var(--rumo-raio-sm);padding:.8rem 1rem">
      <div>
        <b>${escaparHtml(p.titulo)}</b>
        ${p.ativo ? '<span class="badge badge--ok badge--dot">Ativa</span>' : '<span class="badge badge--dot">Inativa</span>'}
        <div class="muted small">${escaparHtml(p.descricao || "")}</div>
      </div>
      <button class="btn btn--ghost btn--sm" data-editar="${p.id}">Editar</button>
    </div>`).join("");

  host.innerHTML = `
    <div class="stack">
      <div class="toolbar">
        <h2 style="margin:0">Provas cadastradas</h2>
        <span class="spacer"></span>
        <button class="btn btn--ghost btn--sm" data-nova-prova>+ Nova prova</button>
      </div>
      ${cards}
    </div>
    <div data-editor-prova style="margin-top:1.2rem"></div>`;

  host.querySelectorAll("[data-editar]").forEach((b) =>
    b.addEventListener("click", () => abrirEditor(b.dataset.editar)));
  host.querySelector("[data-nova-prova]").addEventListener("click", criarProvaVazia);
}

async function criarProvaVazia() {
  const titulo = prompt("Título da nova prova:", "Nova prova de soldagem");
  if (!titulo) return;
  const codigo = prompt("Código curto e único (ex.: D):", "");
  if (!codigo) return;
  const registro = { area: adm.perfil.area, codigo: codigo.trim(), titulo: titulo.trim(), descricao: "", nota_minima: 7, ativo: true };
  const { data, error } = await sb.from("provas")
    .insert(registro)
    .select().single();
  if (error) { alert("Erro ao criar prova: " + error.message); return; }
  await carregarProvas();
  renderListaProvas();
  abrirEditor(data.id);
}

async function abrirEditor(provaId) {
  adm.provaSel = adm.provas.find((p) => p.id === provaId);
  const { data, error } = await sb
    .from("questoes").select("*").eq("prova_id", provaId).order("ordem");
  adm.questoes = error ? [] : (data || []).map((q) => ({
    id: q.id, ordem: q.ordem, enunciado: q.enunciado,
    alternativas: normalizarAlts(q.alternativas), correta: q.correta, justificativa: q.justificativa || "",
  }));
  desenharEditor();
}

// Garante sempre 5 alternativas a–e com a estrutura {id, texto}.
function normalizarAlts(alts) {
  const base = ["a", "b", "c", "d", "e"];
  const map = {};
  (alts || []).forEach((a) => { map[a.id] = a.texto; });
  return base.map((id) => ({ id, texto: map[id] || "" }));
}

function desenharEditor() {
  const host = document.querySelector("[data-editor-prova]");
  const p = adm.provaSel;

  const questoesHtml = adm.questoes.map((q, i) => bloEditorQuestao(q, i)).join("");

  host.innerHTML = `
    <div class="card card--chanfro stack">
      <div class="toolbar">
        <h2 style="margin:0">Editar: ${escaparHtml(p.titulo)}</h2>
        <span class="spacer"></span>
        <button class="btn btn--ghost btn--sm" data-fechar-editor>Fechar</button>
      </div>

      <div class="row">
        <div class="field" style="flex:2">
          <label>Título</label>
          <input class="input" data-p-titulo value="${escaparHtml(p.titulo)}" />
        </div>
        <div class="field" style="max-width:140px">
          <label>Nota mínima</label>
          <input class="input" type="number" step="0.5" min="0" max="10" data-p-nota value="${p.nota_minima}" />
        </div>
      </div>
      <div class="field">
        <label>Descrição</label>
        <textarea class="textarea" data-p-desc rows="2">${escaparHtml(p.descricao || "")}</textarea>
      </div>
      <label class="row" style="gap:.5rem;align-items:center;cursor:pointer">
        <input type="checkbox" data-p-ativo ${p.ativo ? "checked" : ""} style="width:18px;height:18px" />
        <span>Prova ativa (aparece para os alunos)</span>
      </label>

      <hr class="trilho" />
      <div class="toolbar">
        <h3 style="margin:0">Questões (${adm.questoes.length})</h3>
        <span class="spacer"></span>
        <button class="btn btn--ghost btn--sm" data-add-questao>+ Adicionar questão</button>
      </div>
      <div data-questoes>${questoesHtml}</div>

      <hr class="trilho" />
      <div class="toolbar">
        <button class="btn btn--success" data-salvar>Salvar alterações</button>
        <button class="btn btn--danger" data-excluir-prova>Excluir prova</button>
        <span class="spacer"></span>
        <span class="muted small" data-status-editor></span>
      </div>
    </div>`;

  ligarEditor(host);
}

function bloEditorQuestao(q, i) {
  const alts = q.alternativas.map((a) => `
    <div class="editor-alt">
      <input type="radio" name="correta-${i}" value="${a.id}" ${a.id === q.correta ? "checked" : ""} title="Marcar como correta" />
      <span class="alt__key">${a.id})</span>
      <input class="input" data-alt-texto="${i}" data-alt-id="${a.id}" value="${escaparHtml(a.texto)}" placeholder="Texto da alternativa ${a.id}" />
    </div>`).join("");

  return `
    <div class="editor-questao" data-q-card="${i}">
      <div class="editor-questao__head">
        <b>Questão ${i + 1}</b>
        <button class="btn btn--danger btn--sm" data-rm-questao="${i}">Remover</button>
      </div>
      <div class="field">
        <label>Enunciado</label>
        <textarea class="textarea" data-q-enunciado="${i}" rows="2">${escaparHtml(q.enunciado)}</textarea>
      </div>
      <div class="field__hint" style="margin-bottom:.4rem">Marque o círculo da alternativa correta.</div>
      ${alts}
      <div class="field" style="margin-top:.5rem">
        <label>Justificativa (opcional)</label>
        <input class="input" data-q-justif="${i}" value="${escaparHtml(q.justificativa || "")}" placeholder="Ex.: Item 7.1 do procedimento" />
      </div>
    </div>`;
}

function ligarEditor(host) {
  host.querySelector("[data-fechar-editor]").addEventListener("click", () => {
    host.innerHTML = "";
    adm.provaSel = null;
  });
  host.querySelector("[data-add-questao]").addEventListener("click", () => {
    lerEditorParaEstado(host);
    adm.questoes.push({
      id: null, ordem: adm.questoes.length + 1, enunciado: "",
      alternativas: normalizarAlts([]), correta: "a", justificativa: "",
    });
    desenharEditor();
  });
  host.querySelectorAll("[data-rm-questao]").forEach((b) =>
    b.addEventListener("click", () => {
      lerEditorParaEstado(host);
      adm.questoes.splice(Number(b.dataset.rmQuestao), 1);
      desenharEditor();
    }));
  host.querySelector("[data-salvar]").addEventListener("click", () => salvarProva(host));
  host.querySelector("[data-excluir-prova]").addEventListener("click", excluirProva);
}

// Lê os campos atuais do DOM para o estado em memória (antes de re-renderizar).
function lerEditorParaEstado(host) {
  const p = adm.provaSel;
  p.titulo = host.querySelector("[data-p-titulo]").value.trim();
  p.descricao = host.querySelector("[data-p-desc]").value.trim();
  p.nota_minima = Number(host.querySelector("[data-p-nota]").value) || 7;
  p.ativo = host.querySelector("[data-p-ativo]").checked;

  adm.questoes = adm.questoes.map((q, i) => {
    const card = host.querySelector(`[data-q-card="${i}"]`);
    if (!card) return q;
    const enun = card.querySelector(`[data-q-enunciado="${i}"]`).value.trim();
    const justif = card.querySelector(`[data-q-justif="${i}"]`).value.trim();
    const alts = ["a", "b", "c", "d", "e"].map((id) => ({
      id, texto: card.querySelector(`[data-alt-texto="${i}"][data-alt-id="${id}"]`).value.trim(),
    }));
    const sel = card.querySelector(`input[name="correta-${i}"]:checked`);
    return { ...q, enunciado: enun, justificativa: justif, alternativas: alts, correta: sel ? sel.value : "a" };
  });
}

async function salvarProva(host) {
  lerEditorParaEstado(host);
  const p = adm.provaSel;
  const status = host.querySelector("[data-status-editor]");

  // Validação simples e clara.
  for (let i = 0; i < adm.questoes.length; i++) {
    const q = adm.questoes[i];
    if (!q.enunciado) { status.textContent = `A questão ${i + 1} está sem enunciado.`; return; }
    if (q.alternativas.some((a) => !a.texto)) { status.textContent = `Preencha todas as alternativas da questão ${i + 1}.`; return; }
  }

  const btn = host.querySelector("[data-salvar]");
  travarBtn(btn, true, "Salvando…");
  status.textContent = "";
  try {
    // 1) Atualiza dados da prova.
    const { error: e1 } = await sb.from("provas").update({
      titulo: p.titulo, descricao: p.descricao, nota_minima: p.nota_minima,
      ativo: p.ativo, atualizado_em: new Date().toISOString(),
    }).eq("id", p.id);
    if (e1) throw e1;

    // 2) Substitui o conjunto de questões (abordagem simples e previsível).
    const { error: e2 } = await sb.from("questoes").delete().eq("prova_id", p.id);
    if (e2) throw e2;
    if (adm.questoes.length > 0) {
      const novas = adm.questoes.map((q, i) => ({
        prova_id: p.id, ordem: i + 1, enunciado: q.enunciado,
        alternativas: q.alternativas, correta: q.correta, justificativa: q.justificativa,
      }));
      const { error: e3 } = await sb.from("questoes").insert(novas);
      if (e3) throw e3;
    }
    await carregarProvas();
    adm.provaSel = adm.provas.find((x) => x.id === p.id);
    status.textContent = "Salvo!";
    renderListaProvas();
  } catch (err) {
    console.error(err);
    status.textContent = "Erro ao salvar: " + (err.message || err);
    travarBtn(btn, false, "Salvar alterações");
  }
}

async function excluirProva() {
  const p = adm.provaSel;
  if (!confirm(`Excluir a prova "${p.titulo}" e suas questões? As tentativas já realizadas continuam no histórico.`)) return;
  const { error } = await sb.from("provas").delete().eq("id", p.id);
  if (error) { alert("Erro ao excluir: " + error.message); return; }
  adm.provaSel = null;
  await carregarProvas();
  renderListaProvas();
}

function travarBtn(btn, on, txt) { if (btn) { btn.disabled = on; if (txt) btn.textContent = txt; } }
