create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  area text,
  message text,
  method text,
  created_at timestamptz not null default now()
);

alter table public.contact_requests enable row level security;

drop policy if exists "Allow anonymous contact request inserts" on public.contact_requests;

create policy "Allow anonymous contact request inserts"
  on public.contact_requests
  for insert
  to anon
  with check (
    length(trim(name)) > 0
    and length(regexp_replace(phone, '\D', '', 'g')) >= 8
  );

comment on table public.contact_requests is 'Landing page consultation requests submitted through the contact form.';
