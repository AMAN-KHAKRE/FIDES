"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronRight, CircleCheck, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  ["01", "Tell us about your occasion", "Share the event type, date, guest count, location and what you need."],
  ["02", "Get a smart procurement plan", "FIDES turns your requirements into a clear, organized event plan."],
  ["03", "Compare trusted vendors", "Review quotes, inclusions and timelines in one place."],
  ["04", "Book and track everything", "Confirm vendors and keep execution on track from one dashboard."],
];

const categories = ["Venue & Decor", "Food & Catering", "Photography", "Entertainment", "Staff & Logistics", "Gifts & More"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#0b1220]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="text-2xl font-semibold tracking-[0.28em]">FIDES</Link>
        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <a href="#how-it-works" className="transition hover:text-[#0b1220]">How it works</a>
          <a href="#categories" className="transition hover:text-[#0b1220]">Services</a>
          <a href="#why-fides" className="transition hover:text-[#0b1220]">Why FIDES</a>
        </div>
        <Link href="/create-event" className="rounded-full bg-[#0b1220] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
          Create an event <ArrowRight className="ml-2 inline h-4 w-4" />
        </Link>
      </nav>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#c9a45c]/20 blur-3xl" />
        <div className="relative max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c9a45c]/40 bg-white/60 px-4 py-2 text-sm text-slate-700">
            <Sparkles className="h-4 w-4 text-[#a47d32]" /> Event procurement, simplified.
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Your occasion.<br />
            <span className="text-[#a47d32]">Our responsibility.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            FIDES brings event requirements, vendors, quotes and execution together so you can focus on the occasion — not the chaos behind it.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/create-event" className="rounded-full bg-[#0b1220] px-7 py-4 text-center font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl">
              Plan my event <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <a href="#how-it-works" className="rounded-full border border-slate-300 bg-white/50 px-7 py-4 text-center font-medium transition hover:bg-white">
              See how it works
            </a>
          </div>
        </div>

        <div className="relative mt-20 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-[#0b1220] p-7 text-white md:col-span-2 md:min-h-72">
            <p className="text-sm text-white/60">THE FIDES PROMISE</p>
            <p className="mt-14 max-w-xl text-3xl font-medium leading-tight sm:text-4xl">One place to plan, source, compare, book and execute your event.</p>
          </div>
          <div className="rounded-3xl border border-[#0b1220]/10 bg-white p-7 md:min-h-72">
            <ShieldCheck className="h-8 w-8 text-[#a47d32]" />
            <p className="mt-16 text-2xl font-medium">Less chasing.<br />More celebrating.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#0b1220]/10 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a47d32]">How it works</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">From idea to execution.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div key={number} className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-sm font-semibold text-[#a47d32]">{number}</span>
                <h3 className="mt-12 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a47d32]">Everything you need</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">One event. Every detail.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">Tell FIDES what you are planning and we will help structure the procurement across the categories that matter.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
                <span className="font-medium">{category}</span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-fides" className="bg-[#0b1220] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a45c]">Why FIDES</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">The calm behind a great occasion.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {["Structured planning", "Transparent comparisons", "Execution visibility"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <CircleCheck className="h-6 w-6 text-[#c9a45c]" />
                <h3 className="mt-8 text-xl font-medium">{item}</h3>
                <p className="mt-3 leading-7 text-white/60">Designed to keep decisions clear and the event moving forward.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#c9a45c] p-8 text-center sm:p-14">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Ready to plan without the chaos?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#0b1220]/70">Start with your occasion. FIDES will take it from there.</p>
          <Link href="/create-event" className="mt-8 inline-flex rounded-full bg-[#0b1220] px-7 py-4 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
            Create your event <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#0b1220]/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold tracking-[0.2em] text-[#0b1220]">FIDES</span>
          <span>Your occasion. Our responsibility.</span>
        </div>
      </footer>
    </main>
  );
}
