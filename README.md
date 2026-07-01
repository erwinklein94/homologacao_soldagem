# Homologação de Solda — Rumo

Site estático (HTML + CSS + JavaScript puro) para especialistas da **Rumo** aplicarem provas
de homologação em **Soldagem Aluminotérmica de Trilhos**. O aluno só é homologado com
**nota 7,0 ou mais**. Ao final da prova é gerado um **certificado em PDF**.

Backend em **Supabase** (autenticação + banco Postgres + RLS). Roda no **GitHub Pages** sem
nenhuma etapa de build.

> **Repositório dedicado.** A Homologação de **Alívio de Tensão** vive em OUTRO repositório,
> com OUTRO projeto Supabase. Nada aqui acessa ou mistura dados daquela área.

---

## 1. O que cada perfil enxerga

**Administrador** (o especialista)
- **Painel** (`dashboard.html`): KPIs e gráficos de desempenho.
- **Dados & provas** (`admin.html`): todas as tentativas dos alunos (nota, data, instrutor)
  com filtros, e o **editor de provas e questões**.
- Pode também aplicar/pré-visualizar uma prova.

**Aluno / Soldador**
- **Fazer prova** (`prova.html`) e baixar o certificado.
- **Meu perfil** (`perfil.html`): seu histórico de provas e certificados.
- O aluno **nunca vê** as páginas de administrador (nem link para elas).

---

## 2. Estrutura dos arquivos

```
index.html        Redireciona para o login (site de área única)
login.html        Login e primeiro acesso
prova.html        Execução da prova + resultado + PDF
perfil.html       Histórico do aluno
admin.html        Atividades dos alunos + editor de provas (somente admin)
dashboard.html    Gráficos de desempenho (somente admin)
css/rumo.css      Identidade visual da Rumo
js/config.js      URL e chave publishable do projeto Supabase de Solda
js/app.js         Sessão, perfil, guardas de acesso, cabeçalho
js/login.js       Lógica do login e do primeiro acesso
js/prova.js       Execução e correção da prova
js/perfil.js      Histórico do aluno
js/admin.js       Atividades + editor de questões + carga das provas
js/dashboard.js   KPIs e gráficos (Chart.js)
js/certificado.js Geração do certificado em PDF (jsPDF)
js/seed-data.js   As 3 provas padrão de soldagem (botão "Carregar provas padrão")
tools/gen_seed.py Fonte canônica das provas — regenera seed-data.js e seed-provas.sql
sql/schema.sql    Tabelas, papéis, RLS e gatilhos
sql/seed-provas.sql  As 3 provas de solda em SQL (alternativa ao botão do admin)
```

As bibliotecas externas (Supabase, Chart.js, jsPDF) são carregadas por CDN — não há
`npm install` nem passo de compilação.

---

## 3. Supabase

Este repositório usa o **projeto antigo** (`bewpzgakhciphxnsithc`), que já está em produção
com o schema aplicado e os dados de soldagem — **não é preciso rodar nada**. As credenciais
já estão preenchidas em `js/config.js`.

Se um dia criar um projeto do zero: rode `sql/schema.sql` no SQL Editor e desative
**"Confirm email"** em Authentication → Providers → Email.

> A chave **publishable** é pública por natureza — pode ficar no navegador e no repositório.
> Quem protege os dados é o **RLS**, configurado no `schema.sql`. **Nunca** use aqui a chave
> `sb_secret_...` (nem a antiga `service_role`): elas ignoram o RLS.
>
> O banco pode conter dados antigos de Alívio de Tensão (área migrada para outro projeto).
> Este site não os consulta; podem ser apagados quando a migração estiver validada.

---

## 4. Criar o administrador

Não existe tela de "criar admin" (de propósito). O fluxo é:

1. No site, use **Primeiro acesso** com o e-mail que será do administrador.
2. No Supabase, em **SQL Editor**, rode (trocando pelo e-mail usado):

```sql
insert into public.profiles (id, nome, matricula, area, role)
select id, split_part(email, '@', 1), null, 'solda', 'admin'
from auth.users
where lower(email) = lower('voce@rumolog.com')
on conflict (id, area) do update set role = 'admin';
```

---

## 5. Publicar no GitHub Pages

Repositório → **Settings → Pages** → Branch `main`, pasta `/ (root)`. O arquivo `.nojekyll`
já está incluído. Lembre que o `js/config.js` com a chave publishable ficará visível no
repositório — isso é esperado e seguro (ver seção 3).
