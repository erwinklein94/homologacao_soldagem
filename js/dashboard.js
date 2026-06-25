// =====================================================================
// dashboard.js — painel exclusivo do Administrador (dashboard.html)
// KPIs + gráficos (Chart.js) sobre o desempenho dos alunos nas provas.
// =====================================================================

const CORES = {
  azul: "#003865",
  azulClaro: "#32A6E6",
  verde: "#1E9F7F",
  verdeClaro: "#7FE06C",
  erro: "#D84545",
  cinza: "#6D838E",
};

document.addEventListener("DOMContentLoaded", async () => {
  const perfil = await protegerPagina({ requerAdmin: true });
  if (!perfil) return;

  const [tentativas, alunos] = await Promise.all([carregarTentativas(), carregarAlunos()]);

  renderKPIs(tentativas, alunos);

  if (tentativas.length === 0) {
    document.querySelector("[data-graficos]").innerHTML =
      `<div class="card center" style="grid-column:1/-1">
         <h3>Ainda não há provas realizadas</h3>
         <p class="muted">Os gráficos aparecem assim que os alunos começarem a fazer provas.</p>
       </div>`;
    return;
  }

  Chart.defaults.font.family = '"Cera Pro", Verdana, Geneva, Tahoma, sans-serif';
  Chart.defaults.color = "#282B35";

  graficoDistribuicaoNotas(tentativas);
  graficoTentativasPorMes(tentativas);
  graficoAprovacao(tentativas);
  graficoNovosAlunos(alunos);
  graficoMediaPorProva(tentativas);
});

// --------------------------------------------------------------- carga
async function carregarTentativas() {
  const { data, error } = await sb.from("tentativas").select("*");
  if (error) { console.error(error); return []; }
  return data || [];
}
async function carregarAlunos() {
  const { data, error } = await sb
    .from("profiles").select("id, nome, criado_em, role").eq("role", "aluno");
  if (error) { console.error(error); return []; }
  return data || [];
}

// --------------------------------------------------------------- KPIs
function renderKPIs(tentativas, alunos) {
  const host = document.querySelector("[data-kpis]");
  const total = tentativas.length;
  const aprovados = tentativas.filter((t) => t.aprovado).length;
  const taxa = total ? Math.round((aprovados / total) * 100) : 0;
  const media = total ? (tentativas.reduce((s, t) => s + Number(t.nota), 0) / total) : 0;

  host.innerHTML = `
    <div class="kpi">
      <div class="kpi__label">Alunos cadastrados</div>
      <div class="kpi__value">${alunos.length}</div>
      <div class="kpi__sub">no sistema</div>
    </div>
    <div class="kpi">
      <div class="kpi__label">Provas realizadas</div>
      <div class="kpi__value">${total}</div>
      <div class="kpi__sub">tentativas registradas</div>
    </div>
    <div class="kpi kpi--verde">
      <div class="kpi__label">Taxa de aprovação</div>
      <div class="kpi__value">${taxa}%</div>
      <div class="kpi__sub">${aprovados} de ${total} aprovados</div>
    </div>
    <div class="kpi">
      <div class="kpi__label">Média geral</div>
      <div class="kpi__value">${total ? fmtNota(media) : "—"}</div>
      <div class="kpi__sub">de todas as provas</div>
    </div>`;
}

// --------------------------------------------------------------- helpers
function chaveMes(iso) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function rotuloMes(chave) {
  const [a, m] = chave.split("-");
  const nomes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${nomes[Number(m) - 1]}/${a.slice(2)}`;
}
// Devolve as últimas N chaves de mês (inclui meses sem dados) terminando no mês atual.
function ultimosMeses(n) {
  const out = [];
  const d = new Date();
  d.setDate(1);
  for (let i = n - 1; i >= 0; i--) {
    const x = new Date(d.getFullYear(), d.getMonth() - i, 1);
    out.push(`${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}`);
  }
  return out;
}
function novoGrafico(id, config) {
  const el = document.getElementById(id);
  if (el) new Chart(el, config);
}
const eixoInteiro = { ticks: { precision: 0 }, beginAtZero: true };

// --------------------------------------------------------------- gráficos
// 1) Distribuição de notas (faixas; destaque para o corte 7,0)
function graficoDistribuicaoNotas(tentativas) {
  const faixas = [
    { rotulo: "0–2", min: 0, max: 2 },
    { rotulo: "2–4", min: 2, max: 4 },
    { rotulo: "4–6", min: 4, max: 6 },
    { rotulo: "6–7", min: 6, max: 7 },
    { rotulo: "7–8", min: 7, max: 8 },
    { rotulo: "8–9", min: 8, max: 9 },
    { rotulo: "9–10", min: 9, max: 10.01 },
  ];
  const cont = faixas.map((f) => tentativas.filter((t) => {
    const n = Number(t.nota);
    return n >= f.min && n < f.max;
  }).length);
  // Abaixo de 7 = vermelho; 7 ou mais = verde.
  const cores = faixas.map((f) => (f.min >= 7 ? CORES.verde : CORES.erro));

  novoGrafico("chart-notas", {
    type: "bar",
    data: {
      labels: faixas.map((f) => f.rotulo),
      datasets: [{ label: "Provas", data: cont, backgroundColor: cores, borderRadius: 6 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: eixoInteiro },
    },
  });
}

// 2) Tentativas por mês (últimos 6 meses)
function graficoTentativasPorMes(tentativas) {
  const meses = ultimosMeses(6);
  const dados = meses.map((m) => tentativas.filter((t) => chaveMes(t.realizado_em) === m).length);
  novoGrafico("chart-mes", {
    type: "bar",
    data: {
      labels: meses.map(rotuloMes),
      datasets: [{ label: "Provas realizadas", data: dados, backgroundColor: CORES.azulClaro, borderRadius: 6 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: eixoInteiro },
    },
  });
}

// 3) Aprovação x reprovação (doughnut)
function graficoAprovacao(tentativas) {
  const ap = tentativas.filter((t) => t.aprovado).length;
  const re = tentativas.length - ap;
  novoGrafico("chart-aprovacao", {
    type: "doughnut",
    data: {
      labels: ["Aprovados", "Reprovados"],
      datasets: [{ data: [ap, re], backgroundColor: [CORES.verde, CORES.erro], borderWidth: 0 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: "62%",
      plugins: { legend: { position: "bottom" } },
    },
  });
}

// 4) Novos alunos por mês (últimos 6 meses)
function graficoNovosAlunos(alunos) {
  const meses = ultimosMeses(6);
  const dados = meses.map((m) => alunos.filter((a) => chaveMes(a.criado_em) === m).length);
  novoGrafico("chart-alunos", {
    type: "line",
    data: {
      labels: meses.map(rotuloMes),
      datasets: [{
        label: "Novos alunos", data: dados, tension: .3,
        borderColor: CORES.azul, backgroundColor: "rgba(0,56,101,.12)",
        fill: true, pointBackgroundColor: CORES.azul, pointRadius: 4,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: eixoInteiro },
    },
  });
}

// 5) Média de nota por prova
function graficoMediaPorProva(tentativas) {
  const grupos = {};
  tentativas.forEach((t) => {
    (grupos[t.prova_titulo] = grupos[t.prova_titulo] || []).push(Number(t.nota));
  });
  const labels = Object.keys(grupos);
  const medias = labels.map((k) => {
    const arr = grupos[k];
    return Math.round((arr.reduce((s, n) => s + n, 0) / arr.length) * 100) / 100;
  });
  // Rótulos curtos para não estourar o eixo.
  const labelsCurtos = labels.map((l) => (l.length > 22 ? l.slice(0, 20) + "…" : l));

  novoGrafico("chart-prova", {
    type: "bar",
    data: {
      labels: labelsCurtos,
      datasets: [{ label: "Média", data: medias, backgroundColor: CORES.azul, borderRadius: 6 }],
    },
    options: {
      indexAxis: "y",
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { beginAtZero: true, max: 10 } },
    },
  });
}
