# Homologações Rumo — Solda e Alívio de Tensão

Site estático (HTML + CSS + JavaScript puro) para especialistas da **Rumo** aplicarem provas
de homologação em áreas separadas: **Soldagem Aluminotérmica** e **Alívio de Tensão**. O aluno só é homologado com **nota 7,0 ou mais**. Ao final da
prova é gerado um **certificado em PDF**.

Backend em **Supabase** (autenticação + banco Postgres + RLS). Roda no **GitHub Pages** sem
nenhuma etapa de build.

---

## 1. O que cada perfil enxerga

**Administrador** (o especialista)
- **Painel** (`dashboard.html`): KPIs e gráficos de desempenho.
- **Dados & provas** (`admin.html`): todas as tentativas dos alunos (nota, data, instrutor) com
  filtros, e o **editor de provas e questões**.
- Pode também aplicar/pré-visualizar uma prova.

**Aluno / Soldador**
- **Fazer prova** (`prova.html`) e baixar o certificado.
- **Meu perfil** (`perfil.html`): seu histórico de provas e certificados.
- O aluno **nunca vê** as páginas de administrador (nem link para elas).

---

## 2. Estrutura dos arquivos

```
index.html        Entrada por área: Solda ou Alívio de Tensão
prova.html        Execução da prova + resultado + PDF
perfil.html       Histórico do aluno
admin.html        Atividades dos alunos + editor de provas (somente admin)
dashboard.html    Gráficos de desempenho (somente admin)
css/rumo.css      Identidade visual da Rumo
js/config.js      >>> VOCÊ PREENCHE: URL e chave do Supabase
js/app.js         Sessão, perfil, guardas de acesso, cabeçalho
js/login.js       Lógica do login e do primeiro acesso
js/prova.js       Execução e correção da prova
js/perfil.js      Histórico do aluno
js/admin.js       Atividades + editor de questões + carga das provas
js/dashboard.js   KPIs e gráficos (Chart.js)
js/certificado.js Geração do certificado em PDF (jsPDF)
js/seed-data.js   Provas padrão por área: solda e alívio de tensão
js/historico-alivio-tensao.js  Histórico legado de alívio (snapshot de reserva do Supabase)
sql/schema.sql    Tabelas, papéis, RLS e gatilhos
sql/multi-area-primeiro-acesso.sql  Migração para mesmo e-mail em Solda e Alívio
sql/seed-provas.sql  As 3 provas de solda em SQL (alternativa ao botão do admin)
sql/seed-provas-alivio-tensao.sql  As 3 provas de alívio de tensão em SQL
sql/historico-alivio-tensao.sql  Cria a tabela do histórico de alívio e carrega os dados da planilha
assets/           Logos da Rumo
.nojekyll         Faz o GitHub Pages servir os arquivos como estão
```

As bibliotecas externas (Supabase, Chart.js, jsPDF) são carregadas por CDN — não há
`npm install` nem passo de compilação.

---

## 3. Configurar o Supabase

1. Crie uma conta em <https://supabase.com> e um **novo projeto** (guarde a senha do banco).
2. No projeto, abra **SQL Editor → New query**, cole **todo** o conteúdo de
   `sql/schema.sql` e clique em **Run**. Isso cria as tabelas, o RLS e o gatilho que transforma
   cada novo cadastro em "aluno".
3. Se o projeto Supabase já existia antes desta versão, rode também
   `sql/multi-area-primeiro-acesso.sql`. Essa migração permite que o mesmo e-mail tenha um
   perfil em **Solda** e outro perfil em **Alívio de Tensão**, sem misturar os dados.
4. **Simplifique o primeiro acesso** (recomendado): em **Authentication → Providers → Email**,
   desative **"Confirm email"**. Assim o aluno entra logo após criar o acesso, sem precisar
   confirmar e-mail. (Se preferir manter a confirmação, o sistema também funciona — o aluno
   recebe um e-mail antes de poder entrar.)
5. Em **Project Settings → API Keys**, ficam a **Project URL** e a **Publishable key**
   (`sb_publishable_...`). **Neste pacote o `js/config.js` já está preenchido** com a URL e a
   chave publishable do seu projeto — não precisa mexer. Se um dia trocar de projeto ou rotacionar
   a chave, basta editar:

```js
window.SUPABASE_CONFIG = {
  url: "https://SEU-PROJETO.supabase.co",
  publishableKey: "sb_publishable_..."
};
```

> A chave **publishable** é pública por natureza — pode ficar no navegador e no repositório. Quem
> protege os dados é o **RLS**, já configurado no `schema.sql`. **Nunca** use aqui a chave
> `sb_secret_...` (nem a antiga `service_role`): elas ignoram o RLS.

---

## 4. Criar o administrador

Não existe tela de "criar admin" (de propósito). O fluxo é:

1. Abra o site, vá ao cartão **Soldador / Aluno → Primeiro acesso** e crie um acesso com o
   e-mail que será do administrador.
2. No Supabase, em **SQL Editor**, rode (trocando pelo e-mail usado):

```sql
insert into public.profiles (id, nome, matricula, area, role)
select id, split_part(email, '@', 1), null, 'solda', 'admin'
from auth.users
where lower(email) = lower('voce@rumolog.com')
on conflict (id, area) do update set role = 'admin';
```

Para administrador de **Alívio de Tensão**, troque `'solda'` por `'alivio_tensao'`.

3. Saia e entre de novo pelo cartão **Administrador**. Pronto.

Para promover outros administradores no futuro, repita o `insert ... on conflict` acima na área correta.

---

## 5. Carregar as provas padrão

Depois de ter um administrador, entre como admin em **Dados & provas** na área desejada. Se ainda não houver
provas, aparece o botão **"Carregar provas padrão da área"** — clique e pronto. Tudo fica
editável (título, descrição, nota mínima, questões, alternativas e gabarito).

Para **Alívio de Tensão**, também existe o botão **"Substituir provas de alívio"** na aba de edição. Ele exclui/substitui as provas atuais da área e carrega as 3 provas novas baseadas no procedimento `MAN-VP-L-PRO-TR-0036-01`.

_Alternativas via SQL:_
- Solda: rode `sql/seed-provas.sql`.
- Alívio de Tensão: rode `sql/seed-provas-alivio-tensao.sql`.

### Histórico de Alívio de Tensão (aba em "Dados & provas")

A área de **Alívio de Tensão** tem, em **Dados & provas**, uma aba **Histórico** que reúne, num só
lugar, os registros antigos importados da planilha e as provas novas aplicadas pelos fiscais no
sistema. Esses dados legados ficam no Supabase, na tabela `historico_alivio_tensao`.

Para criar a tabela e carregar os registros:

1. Confirme que o `sql/schema.sql` já foi executado (ele cria a função `is_admin_area`, usada no RLS).
2. Em **SQL Editor → New query**, cole **todo** o conteúdo de `sql/historico-alivio-tensao.sql` e clique em **Run**.
   Isso cria a tabela, aplica o RLS (só admin de Alívio de Tensão lê/gerencia) e carrega os registros da planilha.
   Rodar de novo **não duplica** os dados (a carga só ocorre se a tabela estiver vazia).

Só admin da área de Alívio de Tensão enxerga esses dados (RLS). As provas aplicadas no sistema
entram na aba automaticamente — não precisa mexer no banco para elas aparecerem. Enquanto a tabela
não é criada, a aba funciona com um **snapshot de reserva** embutido em
`js/historico-alivio-tensao.js`; depois de rodar o SQL, o Supabase passa a ser a fonte.

Para recarregar o histórico legado no futuro: `truncate public.historico_alivio_tensao;` e rode o
`sql/historico-alivio-tensao.sql` de novo (ou insira as linhas novas direto na tabela).

---

## 6. Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie **todos** os arquivos desta pasta (mantendo a estrutura).
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**, selecione a branch
   `main` e a pasta `/ (root)`. Salve.
4. Aguarde alguns instantes; o GitHub mostra a URL pública (algo como
   `https://seu-usuario.github.io/seu-repositorio/`).

O arquivo `.nojekyll` já está incluído para o Pages servir os arquivos sem processamento.

> Lembre que o `js/config.js` com sua URL e a chave publishable ficará visível no repositório.
> Isso é esperado e seguro para a chave publishable (ela depende do RLS, já configurado). Se ainda
> assim preferir não expor a URL, use um repositório privado com Pages ou um host equivalente.

---

## 7. Como usar no dia a dia

**Aluno**: entra → escolhe a prova → confirma seus dados → escolhe o instrutor que está
aplicando → responde → vê a nota e o gabarito → baixa o certificado em PDF. O histórico fica
em "Meu perfil".

**Administrador**: acompanha tudo em "Dados & provas" (com filtros por aluno, prova e
resultado), edita as questões quando quiser e acompanha os gráficos no "Painel".

---

## 8. Nota de segurança (importante)

Nesta primeira versão, a **correção é feita no navegador** (o gabarito chega ao cliente junto
com a prova). É adequado para um ambiente de confiança e simplicidade. Se mais tarde for preciso
impedir que alguém inspecione o gabarito pelo navegador, o próximo passo é mover a correção para
o servidor — por exemplo, uma **Edge Function** no Supabase que recebe as respostas, corrige
contra o gabarito (que nunca sai do servidor) e grava a tentativa. A estrutura atual já isola
esse ponto em `js/prova.js`, facilitando a troca.

Os demais acessos **já são protegidos pelo RLS**: um aluno não consegue ler tentativas de
outros, nem editar provas, mesmo chamando a API diretamente.

---

## 9. Personalizar

- **Trocar/editar provas e questões**: pela própria página **Dados & provas** (admin).
- **Nota mínima**: é por prova, no editor (campo "Nota mínima").
- **Aparência**: tudo em `css/rumo.css`, organizado por blocos e usando as cores da marca Rumo.
