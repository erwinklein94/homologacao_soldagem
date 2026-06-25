-- =====================================================================
-- Homologação de Soldagem Aluminotérmica — Rumo
-- Schema do banco (Supabase / Postgres) — estrutura + segurança (RLS)
-- Rode este arquivo PRIMEIRO no SQL Editor do Supabase.
-- Depois, opcionalmente, rode seed-provas.sql (ou use o botão no Admin).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) TABELAS
-- ---------------------------------------------------------------------

-- Perfil de cada usuário (1:1 com auth.users). role define o acesso.
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  nome        text not null default '',
  matricula   text,
  role        text not null default 'aluno' check (role in ('aluno', 'admin')),
  criado_em   timestamptz not null default now()
);

-- Provas (modelos de avaliação). codigo é único (A, B, C, ...).
create table if not exists public.provas (
  id           uuid primary key default gen_random_uuid(),
  codigo       text not null unique,
  titulo       text not null,
  descricao    text default '',
  nota_minima  numeric not null default 7,
  ativo        boolean not null default true,
  criado_em    timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

-- Questões de cada prova.
-- alternativas: jsonb no formato [{"id":"a","texto":"..."}, ...]
-- correta: id da alternativa correta (ex.: "b")
create table if not exists public.questoes (
  id            uuid primary key default gen_random_uuid(),
  prova_id      uuid not null references public.provas (id) on delete cascade,
  ordem         int not null,
  enunciado     text not null,
  alternativas  jsonb not null default '[]'::jsonb,
  correta       text not null,
  justificativa text default '',
  unique (prova_id, ordem)
);

-- Tentativas (resultados das provas). Guarda "fotografia" dos nomes
-- para o histórico continuar legível mesmo que algo mude depois.
create table if not exists public.tentativas (
  id             uuid primary key default gen_random_uuid(),
  aluno_id       uuid not null references public.profiles (id) on delete cascade,
  aluno_nome     text not null default '',
  prova_id       uuid references public.provas (id) on delete set null,
  prova_titulo   text not null default '',
  instrutor_id   uuid references public.profiles (id) on delete set null,
  instrutor_nome text not null default '',
  nota           numeric not null,
  acertos        int not null,
  total          int not null,
  aprovado       boolean not null,
  respostas      jsonb not null default '{}'::jsonb,
  realizado_em   timestamptz not null default now()
);

create index if not exists idx_questoes_prova on public.questoes (prova_id, ordem);
create index if not exists idx_tentativas_aluno on public.tentativas (aluno_id, realizado_em desc);
create index if not exists idx_tentativas_data on public.tentativas (realizado_em);

-- ---------------------------------------------------------------------
-- 2) FUNÇÃO is_admin()  (evita recursão de RLS na tabela profiles)
--    SECURITY DEFINER: roda como dono da função (postgres), que ignora RLS.
-- ---------------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ---------------------------------------------------------------------
-- 3) TRIGGER: ao criar usuário no Auth, cria o profile como 'aluno'.
--    nome/matrícula vêm dos metadados enviados no cadastro.
-- ---------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, nome, matricula, role)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'nome', ''), split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'matricula',
    'aluno'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- 4) ROW LEVEL SECURITY
-- ---------------------------------------------------------------------
alter table public.profiles   enable row level security;
alter table public.provas     enable row level security;
alter table public.questoes   enable row level security;
alter table public.tentativas enable row level security;

-- ---- profiles ----
-- ler o próprio perfil
drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
  for select using (id = auth.uid());

-- qualquer autenticado pode ver perfis de ADMIN (para a lista de instrutores)
drop policy if exists profiles_select_admins on public.profiles;
create policy profiles_select_admins on public.profiles
  for select using (role = 'admin');

-- admin vê todos os perfis
drop policy if exists profiles_select_admin_all on public.profiles;
create policy profiles_select_admin_all on public.profiles
  for select using (public.is_admin());

-- inserir o próprio perfil (fallback, caso o trigger esteja desativado)
drop policy if exists profiles_insert_self on public.profiles;
create policy profiles_insert_self on public.profiles
  for insert with check (id = auth.uid());

-- atualizar o próprio perfil (não pode trocar role: ver trigger/política de admin)
drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- admin atualiza qualquer perfil (ex.: promover alguém a admin)
drop policy if exists profiles_update_admin on public.profiles;
create policy profiles_update_admin on public.profiles
  for update using (public.is_admin()) with check (public.is_admin());

-- ---- provas ----
drop policy if exists provas_select_auth on public.provas;
create policy provas_select_auth on public.provas
  for select using (auth.uid() is not null);

drop policy if exists provas_write_admin on public.provas;
create policy provas_write_admin on public.provas
  for all using (public.is_admin()) with check (public.is_admin());

-- ---- questoes ----
drop policy if exists questoes_select_auth on public.questoes;
create policy questoes_select_auth on public.questoes
  for select using (auth.uid() is not null);

drop policy if exists questoes_write_admin on public.questoes;
create policy questoes_write_admin on public.questoes
  for all using (public.is_admin()) with check (public.is_admin());

-- ---- tentativas ----
-- aluno vê as próprias; admin vê todas
drop policy if exists tentativas_select on public.tentativas;
create policy tentativas_select on public.tentativas
  for select using (aluno_id = auth.uid() or public.is_admin());

-- aluno insere a própria tentativa
drop policy if exists tentativas_insert_own on public.tentativas;
create policy tentativas_insert_own on public.tentativas
  for insert with check (aluno_id = auth.uid());

-- só admin pode alterar/apagar tentativas
drop policy if exists tentativas_update_admin on public.tentativas;
create policy tentativas_update_admin on public.tentativas
  for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists tentativas_delete_admin on public.tentativas;
create policy tentativas_delete_admin on public.tentativas
  for delete using (public.is_admin());

-- =====================================================================
-- PRONTO.
-- Para promover seu usuário a ADMIN (troque o e-mail):
--   update public.profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'voce@exemplo.com');
-- =====================================================================
