"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Check, ChevronRight, CircleHelp, Sparkles } from "lucide-react";
import Link from "next/link";
import { generateRequirements, type Requirement } from "../../lib/eventRequirements";

const eventTypes = ["Wedding", "Corporate Event", "Birthday", "Social Gathering"];

export default function ProcurementPlanPage() {
  const [eventType, setEventType] = useState("Wedding");
  const [guests, setGuests] = useState(200);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const requirements = useMemo(() => generateRequirements(eventType, guests), [eventType, guests]);
  const essentialCount = requirements.filter((r) => r.priority === "Essential").length;

  const toggle = (id: string) => setSelected((current) => ({ ...current, [id]: current[id] === false }));
  const isIncluded = (r: Requirement) => selected[r.id] !== false;

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#0b1220]">
      <header className="border-b border-[#0b1220]/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-[0.22em]">FIDES</Link>
          <Link href="/dashboard" className="text-sm font-semibold text-[#0b1220]/60">Dashboard</Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b1220]/55"><ArrowLeft size={16} /> Back to dashboard</Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">Procurement engine</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">Build your event plan.</h1>
            <p className="mt-4 text-sm leading-6 text-[#0b1220]/60">FIDES turns a few event details into a vendor-ready procurement checklist. Start with the basics and refine it before requesting quotes.</p>

            <div className="mt-8 rounded-2xl border border-[#0b1220]/10 bg-white/65 p-5">
              <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#0b1220]/45">Event type</label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {eventTypes.map((type) => (
                  <button key={type} onClick={() => setEventType(type)} className={`rounded-xl border px-3 py-3 text-left text-xs font-semibold transition ${eventType === type ? "border-[#0b1220] bg-[#0b1220] text-white" : "border-[#0b1220]/10 bg-white hover:border-[#0b1220]/30"}`}>{type}</button>
                ))}
              </div>

              <label className="mt-6 block text-xs font-bold uppercase tracking-[0.15em] text-[#0b1220]/45">Expected guests</label>
              <input type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value) || 1)} className="mt-3 w-full rounded-xl border border-[#0b1220]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a45c]" />
            </div>

            <div className="mt-5 flex gap-3 rounded-2xl bg-[#0b1220] p-5 text-white">
              <Sparkles className="mt-0.5 shrink-0 text-[#c9a45c]" size={18} />
              <p className="text-xs leading-5 text-white/70"><strong className="text-white">FIDES recommendation:</strong> we identified {requirements.length} procurement categories, including {essentialCount} essentials for this event.</p>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-end justify-between">
              <div><h2 className="text-2xl font-semibold">Recommended requirements</h2><p className="mt-1 text-sm text-[#0b1220]/50">Switch off anything you don&apos;t need.</p></div>
              <span className="text-xs font-semibold text-[#0b1220]/45">{requirements.filter(isIncluded).length} selected</span>
            </div>

            <div className="space-y-3">
              {requirements.map((r) => {
                const included = isIncluded(r);
                return <button key={r.id} onClick={() => toggle(r.id)} className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${included ? "border-[#0b1220]/10 bg-white/75" : "border-[#0b1220]/5 bg-[#0b1220]/[0.03] opacity-55"}`}>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${included ? "bg-[#0b1220] text-white" : "border border-[#0b1220]/15 text-transparent"}`}><Check size={15} /></span>
                  <span className="min-w-0 flex-1"><span className="flex flex-wrap items-center gap-2"><strong className="text-sm">{r.name}</strong><span className="rounded-full bg-[#0b1220]/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wide">{r.priority}</span></span><span className="mt-1 block text-xs text-[#0b1220]/50">{r.category} · {r.description}{r.quantity ? ` · ${r.quantity}` : ""}</span></span>
                  <CircleHelp size={16} className="hidden shrink-0 text-[#0b1220]/25 sm:block" />
                </button>;
              })}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#0b1220]/10 bg-white/60 p-4">
              <div><p className="text-sm font-bold">Ready for vendor matching?</p><p className="mt-1 text-xs text-[#0b1220]/50">Your selected requirements become vendor-ready briefs next.</p></div>
              <button className="flex items-center gap-2 rounded-full bg-[#0b1220] px-5 py-3 text-xs font-bold text-white">Find vendors <ChevronRight size={15} /></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
