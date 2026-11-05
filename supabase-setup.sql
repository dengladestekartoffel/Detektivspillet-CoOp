-- Detektivspillet · Supabase-opsætning
-- Kør hele filen én gang i Supabase: SQL Editor → New query → indsæt → Run.
-- Tabellen er låst med RLS (ingen policies), så browseren kun kan bruge de tre funktioner nedenfor.
-- Detektivkoden (en tilfældig UUID) fungerer som spillerens hemmelige nøgle.

create table if not exists public.detektiv_saves (
  code       uuid primary key,
  name       text not null default 'Detektiv',
  data       jsonb not null,
  solved     int  not null default 0,
  attempts   int  not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.detektiv_saves enable row level security;

create or replace function public.detektiv_save(p_code uuid, p_name text, p_data jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare s int := 0; a int := 0;
begin
  if p_code is null or p_data is null then raise exception 'mangler data'; end if;
  if octet_length(p_data::text) > 200000 then raise exception 'for stor'; end if;
  if jsonb_typeof(p_data->'solved') = 'array' then
    s := least(jsonb_array_length(p_data->'solved'), 1000);
    select coalesce(sum(case when (p_data->'attempts'->>x) ~ '^\d{1,4}$' then (p_data->'attempts'->>x)::int else 0 end), 0)
      into a from jsonb_array_elements_text(p_data->'solved') as x;
  end if;
  insert into detektiv_saves(code, name, data, solved, attempts, updated_at)
  values (p_code, left(coalesce(nullif(trim(p_name), ''), 'Detektiv'), 35), p_data, s, a, now())
  on conflict (code) do update
    set name = excluded.name, data = excluded.data, solved = excluded.solved,
        attempts = excluded.attempts, updated_at = now();
end $$;

create or replace function public.detektiv_load(p_code uuid)
returns jsonb language sql stable security definer set search_path = public as $$
  select data from detektiv_saves where code = p_code
$$;

create or replace function public.detektiv_toplist()
returns table(name text, solved int, attempts int)
language sql stable security definer set search_path = public as $$
  select name, solved, attempts from detektiv_saves
  where solved > 0
  order by solved desc, attempts asc, updated_at asc
  limit 20
$$;

revoke all on function public.detektiv_save(uuid, text, jsonb) from public;
revoke all on function public.detektiv_load(uuid) from public;
revoke all on function public.detektiv_toplist() from public;
grant execute on function public.detektiv_save(uuid, text, jsonb) to anon, authenticated;
grant execute on function public.detektiv_load(uuid) to anon, authenticated;
grant execute on function public.detektiv_toplist() to anon, authenticated;

-- ── Makkerpar på to iPads ─────────────────────────────────────────────────────
-- Hvert makkerpar har et rum med en kode på fem tegn. Koden er nøglen.
-- `rev` stiger ved hver ændring, så to iPads ikke overskriver hinanden.
-- Hele filen kan trygt køres igen.

create table if not exists public.detektiv_rooms (
  code         text primary key check (code ~ '^[A-Z2-9]{5}$'),
  rev          int  not null default 1,
  data         jsonb not null,
  seen_felt    timestamptz,
  seen_central timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
alter table public.detektiv_rooms enable row level security;

create or replace function public.detektiv_room_create(p_code text, p_data jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if p_code is null or p_code !~ '^[A-Z2-9]{5}$' or p_data is null then raise exception 'mangler data'; end if;
  if octet_length(p_data::text) > 200000 then raise exception 'for stor'; end if;
  -- Ryd op i rum, ingen har rørt i et halvt år. Rum med opklarede sager slettes aldrig.
  delete from detektiv_rooms
  where greatest(updated_at, coalesce(seen_felt, updated_at), coalesce(seen_central, updated_at)) < now() - interval '180 days'
    and coalesce(jsonb_array_length(data->'solved'), 0) = 0;
  insert into detektiv_rooms(code, data) values (p_code, p_data) on conflict (code) do nothing;
  return found;
end $$;

-- Henter rummet, hvis det er ændret siden p_rev, og melder samtidig, at p_role er online.
create or replace function public.detektiv_room_poll(p_code text, p_rev int, p_role text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r detektiv_rooms;
begin
  update detektiv_rooms set
    seen_felt    = case when p_role = 'felt'    then now() else seen_felt end,
    seen_central = case when p_role = 'central' then now() else seen_central end
  where code = p_code returning * into r;
  if not found then return null; end if;
  return jsonb_build_object(
    'rev', r.rev,
    'data', case when r.rev is distinct from p_rev then r.data end,
    'felt', extract(epoch from now() - r.seen_felt),
    'central', extract(epoch from now() - r.seen_central));
end $$;

-- Gemmer kun, hvis ingen andre har gemt siden p_rev. Returnerer ny rev, eller -1 ved konflikt.
create or replace function public.detektiv_room_push(p_code text, p_rev int, p_data jsonb)
returns int language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if p_data is null then raise exception 'mangler data'; end if;
  if octet_length(p_data::text) > 200000 then raise exception 'for stor'; end if;
  update detektiv_rooms set data = p_data, rev = rev + 1, updated_at = now()
  where code = p_code and rev = p_rev returning rev into n;
  return coalesce(n, -1);
end $$;

revoke all on function public.detektiv_room_create(text, jsonb) from public;
revoke all on function public.detektiv_room_poll(text, int, text) from public;
revoke all on function public.detektiv_room_push(text, int, jsonb) from public;
grant execute on function public.detektiv_room_create(text, jsonb) to anon, authenticated;
grant execute on function public.detektiv_room_poll(text, int, text) to anon, authenticated;
grant execute on function public.detektiv_room_push(text, int, jsonb) to anon, authenticated;

-- ── Sikkerhedskopier af makkerpar-rum ───────────────────────────────────────
-- Kun til brug fra SQL Editor (ingen adgang fra browseren). Tag en kopi med:
--   insert into public.detektiv_room_backups(code, data, note)
--   select code, data, 'beskrivelse' from public.detektiv_rooms where code = 'XXXXX';
create table if not exists public.detektiv_room_backups (
  id bigserial primary key,
  code text not null,
  data jsonb not null,
  note text,
  saved_at timestamptz not null default now()
);
alter table public.detektiv_room_backups enable row level security;
