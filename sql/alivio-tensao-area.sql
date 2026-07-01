-- =====================================================================
-- MIGRACAO — Primeiro acesso separado por area com o mesmo e-mail
--
-- Rode este arquivo no SQL Editor do Supabase para permitir que o mesmo
-- usuario do Auth tenha um perfil em Solda e outro em Alivio de Tensao.
-- Depois de rodar, o aluno que ja se cadastrou em Solda consegue fazer o
-- primeiro acesso em Alivio usando o mesmo e-mail e a mesma senha.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) GARANTE COLUNAS DE AREA
-- ---------------------------------------------------------------------

alter table public.profiles
  add column if not exists area text not null default 'solda'
  check (area in ('solda', 'alivio_tensao'));

alter table public.provas
  add column if not exists area text not null default 'solda'
  check (area in ('solda', 'alivio_tensao'));

alter table public.tentativas
  add column if not exists area text not null default 'solda'
  check (area in ('solda', 'alivio_tensao'));

update public.profiles set area = 'solda' where area is null;
update public.provas set area = 'solda' where area is null;
update public.tentativas set area = 'solda' where area is null;

-- ---------------------------------------------------------------------
-- 2) TROCA public.profiles DE 1 PERFIL POR E-MAIL PARA 1 PERFIL POR AREA
-- ---------------------------------------------------------------------

alter table public.tentativas drop constraint if exists tentativas_aluno_id_fkey;
alter table public.tentativas drop constraint if exists tentativas_instrutor_id_fkey;

-- Remove a chave antiga somente se ela era apenas por id.
-- Se a chave ja for (id, area), nao mexe nela; isso permite rodar o SQL novamente.
do $$
begin
  if exists (
    select 1
    from pg_constraint
    where conrelid = 'public.profiles'::regclass
      and conname = 'profiles_pkey'
      and array_length(conkey, 1) = 1
  ) then
    alter table public.profiles drop constraint profiles_pkey;
  end if;
end $$;

-- Cria chave nova por usuario + area.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.profiles'::regclass
      and conname = 'profiles_pkey'
  ) then
    alter table public.profiles add constraint profiles_pkey primary key (id, area);
  end if;
end $$;

-- Garante que tentativas apontem para o perfil da mesma area.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.tentativas'::regclass
      and conname = 'tentativas_aluno_area_fkey'
  ) then
    alter table public.tentativas
      add constraint tentativas_aluno_area_fkey
      foreign key (aluno_id, area)
      references public.profiles (id, area)
      on delete cascade;
  end if;
end $$;

-- ---------------------------------------------------------------------
-- 3) INDICES E CHAVE DE PROVAS POR AREA
-- ---------------------------------------------------------------------

alter table public.provas drop constraint if exists provas_codigo_key;
create unique index if not exists provas_area_codigo_key
  on public.provas (area, codigo);

create index if not exists idx_profiles_area_role on public.profiles (area, role);
create index if not exists idx_profiles_id_area on public.profiles (id, area);
create index if not exists idx_provas_area_codigo on public.provas (area, codigo);
create index if not exists idx_tentativas_area_aluno on public.tentativas (area, aluno_id, realizado_em desc);
create index if not exists idx_tentativas_area_data on public.tentativas (area, realizado_em);

-- ---------------------------------------------------------------------
-- 4) FUNCOES DE APOIO PARA RLS
-- ---------------------------------------------------------------------

create or replace function public.tem_acesso_area(area_alvo text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.area = area_alvo
  )
$$;

create or replace function public.minha_area()
returns text
language sql
security definer
set search_path = public
stable
as $$
  -- Mantida por compatibilidade com versoes antigas.
  -- Em sistema multi-area, a area correta vem do filtro da consulta.
  select p.area
  from public.profiles p
  where p.id = auth.uid()
  order by p.criado_em desc
  limit 1
$$;

create or replace function public.is_admin_area(area_alvo text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
      and p.area = area_alvo
  )
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
$$;

-- ---------------------------------------------------------------------
-- 5) TRIGGER DE NOVOS USUARIOS
-- ---------------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  area_informada text;
begin
  area_informada := coalesce(nullif(new.raw_user_meta_data ->> 'area', ''), 'solda');
  if area_informada not in ('solda', 'alivio_tensao') then
    area_informada := 'solda';
  end if;

  insert into public.profiles (id, nome, matricula, area, role)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'nome', ''), split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'matricula',
    area_informada,
    'aluno'
  )
  on conflict (id, area) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- 6) RLS SEPARADO POR AREA
-- ---------------------------------------------------------------------

alter table public.profiles   enable row level security;
alter table public.provas     enable row level security;
alter table public.questoes   enable row level security;
alter table public.tentativas enable row level security;

drop policy if exists profiles_select_own on public.profiles;
drop policy if exists profiles_select_admins on public.profiles;
drop policy if exists profiles_select_admin_all on public.profiles;
drop policy if exists profiles_select_area on public.profiles;
create policy profiles_select_area on public.profiles
  for select using (
    id = auth.uid()
    or (role = 'admin' and public.tem_acesso_area(area))
    or public.is_admin_area(area)
  );

drop policy if exists profiles_insert_self on public.profiles;
create policy profiles_insert_self on public.profiles
  for insert with check (
    id = auth.uid()
    and role = 'aluno'
    and area in ('solda', 'alivio_tensao')
  );

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update using (id = auth.uid() and role = 'aluno')
  with check (id = auth.uid() and role = 'aluno' and area in ('solda', 'alivio_tensao'));

drop policy if exists profiles_update_admin on public.profiles;
create policy profiles_update_admin on public.profiles
  for update using (public.is_admin_area(area))
  with check (public.is_admin_area(area));

drop policy if exists provas_select_auth on public.provas;
create policy provas_select_auth on public.provas
  for select using (auth.uid() is not null and public.tem_acesso_area(area));

drop policy if exists provas_write_admin on public.provas;
create policy provas_write_admin on public.provas
  for all using (public.is_admin_area(area))
  with check (public.is_admin_area(area));

drop policy if exists questoes_select_auth on public.questoes;
create policy questoes_select_auth on public.questoes
  for select using (
    auth.uid() is not null
    and exists (
      select 1 from public.provas p
      where p.id = prova_id and public.tem_acesso_area(p.area)
    )
  );

drop policy if exists questoes_write_admin on public.questoes;
create policy questoes_write_admin on public.questoes
  for all using (
    exists (
      select 1 from public.provas p
      where p.id = prova_id and public.is_admin_area(p.area)
    )
  )
  with check (
    exists (
      select 1 from public.provas p
      where p.id = prova_id and public.is_admin_area(p.area)
    )
  );

drop policy if exists tentativas_select on public.tentativas;
create policy tentativas_select on public.tentativas
  for select using (aluno_id = auth.uid() or public.is_admin_area(area));

drop policy if exists tentativas_insert_own on public.tentativas;
create policy tentativas_insert_own on public.tentativas
  for insert with check (aluno_id = auth.uid() and public.tem_acesso_area(area));

drop policy if exists tentativas_update_admin on public.tentativas;
create policy tentativas_update_admin on public.tentativas
  for update using (public.is_admin_area(area))
  with check (public.is_admin_area(area));

drop policy if exists tentativas_delete_admin on public.tentativas;
create policy tentativas_delete_admin on public.tentativas
  for delete using (public.is_admin_area(area));

-- ---------------------------------------------------------------------
-- 7) ADMINISTRADOR DA AREA DE ALIVIO
-- ---------------------------------------------------------------------
-- O usuario precisa existir em Authentication. Este comando NAO cria senha;
-- ele cria/ajusta apenas o perfil da area alivio_tensao.

insert into public.profiles (id, nome, matricula, area, role)
select
  u.id,
  coalesce(nullif(u.raw_user_meta_data ->> 'nome', ''), split_part(u.email, '@', 1)),
  u.raw_user_meta_data ->> 'matricula',
  'alivio_tensao',
  'admin'
from auth.users u
where lower(u.email) = lower('Erwin.klein@ext.rumolog.com')
on conflict (id, area) do update
set
  role = 'admin',
  nome = coalesce(nullif(public.profiles.nome, ''), excluded.nome),
  matricula = coalesce(public.profiles.matricula, excluded.matricula);

do $$
begin
  if not exists (
    select 1 from auth.users
    where lower(email) = lower('Erwin.klein@ext.rumolog.com')
  ) then
    raise notice 'Usuario Erwin.klein@ext.rumolog.com ainda nao existe em Authentication. Crie o usuario no Supabase Auth e rode este arquivo novamente.';
  end if;
end $$;

-- ---------------------------------------------------------------------
-- 8) PROVAS PADRAO DA AREA DE ALIVIO DE TENSAO
-- ---------------------------------------------------------------------
-- Para carregar/substituir as 2 provas ATT 4 oficiais desta area, rode tambem:
-- sql/seed-provas-alivio-tensao.sql
