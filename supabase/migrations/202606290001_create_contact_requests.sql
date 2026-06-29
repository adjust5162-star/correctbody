create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  pain_area text,
  message text,
  contact_type text,
  created_at timestamptz not null default now()
);

alter table public.contact_requests enable row level security;

drop policy if exists "Anyone can insert contact requests" on public.contact_requests;

create policy "Anyone can insert contact requests"
on public.contact_requests
for insert
to anon
with check (true);
