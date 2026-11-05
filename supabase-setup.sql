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
    s := least(jsonb_array_length(p_data->'solved'), 8);
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
