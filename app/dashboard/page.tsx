"use client";

import { CalendarDays, ChevronRight, CircleCheck, Clock3, MapPin, Plus, Sparkles, Users, WalletCards } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Active events", value: "2", icon: CalendarDays },
  { label: "Requirements", value: "14", icon: Sparkles },
  { label: "Quotes received", value: "8", icon: WalletCards },
  { label: "Vendors booked", value: "5", icon: CircleCheck },
];

const events = [
  { name: "Aarav & Riya Wedding", type: "Wedding", date: "18 Oct 2026", location: "Bengaluru", guests: 280, progress: 62, status: "Procurement in progress" },
  { name: "NMIT Alumni Meetup", type: "Corporate / Social", date: "07 Nov 2026", location: "Bengaluru", guests: 120, progress: 28, status: "Requirements collected" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#0b1220]">
      <header className="border-b border-[#0b1220]/10 bg-[#f7f4ed]/95 px-6 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-[0.22em]">FIDES</Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-[#0b1220]/55 sm:inline">Aman&apos;s workspace</span>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0b1220] text-xs font-bold text-[#f7f4ed]">AK</div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">Command center</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Your events, under control.</h1>
            <p className="mt-3 max-w-xl text-[#0b1220]/60">Plan requirements, manage vendors, compare quotes, and track every moving part from one place.</p>
          </div>
          <Link href="/create-event" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1220] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5">
            <Plus size={17} /> Create event
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-[#0b1220]/10 bg-white/60 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#0b1220]/55">{label}</span>
                <Icon size={18} className="text-[#c9a45c]" />
              </div>
              <p className="mt-4 text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Your events</h2>
            <p className="mt-1 text-sm text-[#0b1220]/50">Everything currently being planned through FIDES.</p>
          </div>
          <span className="hidden rounded-full border border-[#0b1220]/10 px-4 py-2 text-xs font-semibold sm:inline">2 active</span>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {events.map((event) => (
            <article key={event.name} className="overflow-hidden rounded-3xl border border-[#0b1220]/10 bg-white/70">
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c9a45c]">{event.type}</span>
                    <h3 className="mt-2 text-xl font-semibold">{event.name}</h3>
                  </div>
                  <span className="rounded-full bg-[#0b1220]/5 px-3 py-1.5 text-xs font-semibold">Planning</span>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-[#0b1220]/60 sm:grid-cols-3">
                  <div className="flex items-center gap-2"><CalendarDays size={15} /> {event.date}</div>
                  <div className="flex items-center gap-2"><MapPin size={15} /> {event.location}</div>
                  <div className="flex items-center gap-2"><Users size={15} /> {event.guests} guests</div>
                </div>

                <div className="mt-7">
                  <div className="mb-2 flex justify-between text-xs font-semibold">
                    <span>{event.status}</span><span>{event.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#0b1220]/8">
                    <div className="h-full rounded-full bg-[#c9a45c]" style={{ width: `${event.progress}%` }} />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#0b1220]/8 px-6 py-4 md:px-7">
                <span className="flex items-center gap-2 text-xs text-[#0b1220]/50"><Clock3 size={14} /> Updated today</span>
                <button className="flex items-center gap-1 text-sm font-bold">Open event <ChevronRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#0b1220] p-7 text-white md:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">Next up</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Turn requirements into a procurement plan.</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">FIDES will organize your needs into categories, budgets, quantities, and vendor-ready briefs before you start collecting quotes.</p>
            <Link href="/create-event" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c9a45c] px-5 py-3 text-sm font-bold text-[#0b1220]">Start planning <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
