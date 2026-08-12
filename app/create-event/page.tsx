"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Users, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

const eventTypes = ["Wedding", "Birthday", "Corporate", "Engagement", "Anniversary", "Other"];

export default function CreateEvent() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#0b1220]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">FIDES</Link>
        <span className="text-sm text-slate-500">Event setup</span>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <div className="mb-10 flex items-center gap-3 text-sm text-slate-500">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full font-medium ${step >= item ? "bg-[#0b1220] text-white" : "border border-slate-300 bg-white"}`}>{item}</span>
              {item < 3 && <span className="h-px w-10 bg-slate-300 sm:w-20" />}
            </div>
          ))}
        </div>

        {submitted ? (
          <section className="rounded-[2rem] bg-white p-8 text-center shadow-sm sm:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a45c]/20">
              <Sparkles className="h-7 w-7 text-[#a47d32]" />
            </div>
            <h1 className="mt-7 text-4xl font-semibold tracking-tight">Your FIDES plan is next.</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">We have captured your event brief. The next product step will turn this into a procurement plan and vendor shortlist.</p>
            <Link href="/" className="mt-8 inline-flex rounded-full bg-[#0b1220] px-6 py-3 font-medium text-white">Back to FIDES</Link>
          </section>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
            {step === 1 && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a47d32]">Step 01</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">Tell us about your occasion.</h1>
                <p className="mt-4 text-slate-600">Start with the basics. You can add detailed requirements next.</p>

                <div className="mt-9">
                  <label className="text-sm font-medium">What are you planning?</label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {eventTypes.map((type) => (
                      <button type="button" key={type} onClick={() => setEventType(type)} className={`rounded-2xl border p-4 text-left transition ${eventType === type ? "border-[#0b1220] bg-[#0b1220] text-white" : "border-slate-200 hover:border-slate-400"}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block"><span className="text-sm font-medium">Event date</span><span className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3"><CalendarDays className="h-4 w-4 text-slate-400" /><input required type="date" className="w-full bg-transparent outline-none" /></span></label>
                  <label className="block"><span className="text-sm font-medium">Guest count</span><span className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3"><Users className="h-4 w-4 text-slate-400" /><input required type="number" min="1" placeholder="e.g. 150" className="w-full bg-transparent outline-none" /></span></label>
                </div>
                <label className="mt-5 block"><span className="text-sm font-medium">Location</span><span className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3"><MapPin className="h-4 w-4 text-slate-400" /><input required placeholder="City or venue area" className="w-full bg-transparent outline-none" /></span></label>

                <button type="button" disabled={!eventType} onClick={() => setStep(2)} className="mt-8 w-full rounded-full bg-[#0b1220] px-6 py-4 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40">Continue <ArrowRight className="ml-2 inline h-4 w-4" /></button>
              </div>
            )}

            {step === 2 && (
              <div>
                <button type="button" onClick={() => setStep(1)} className="mb-8 inline-flex items-center text-sm text-slate-500 hover:text-[#0b1220]"><ArrowLeft className="mr-2 h-4 w-4" /> Back</button>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a47d32]">Step 02</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">What do you need?</h1>
                <p className="mt-4 text-slate-600">Tell us what FIDES should source for you. Pick everything that applies.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Venue & Decor", "Catering", "Photography & Video", "Entertainment", "Staff & Logistics", "Invitations & Gifts"].map((item) => (
                    <label key={item} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4 hover:border-slate-400"><input type="checkbox" className="h-4 w-4 accent-[#0b1220]" /> <span>{item}</span></label>
                  ))}
                </div>
                <label className="mt-6 block"><span className="text-sm font-medium">Anything else?</span><textarea rows={4} placeholder="Budget, preferences, special requirements..." className="mt-2 w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-[#0b1220]" /></label>
                <button type="button" onClick={() => setStep(3)} className="mt-8 w-full rounded-full bg-[#0b1220] px-6 py-4 font-medium text-white">Review brief <ArrowRight className="ml-2 inline h-4 w-4" /></button>
              </div>
            )}

            {step === 3 && (
              <div>
                <button type="button" onClick={() => setStep(2)} className="mb-8 inline-flex items-center text-sm text-slate-500 hover:text-[#0b1220]"><ArrowLeft className="mr-2 h-4 w-4" /> Back</button>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a47d32]">Step 03</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">Ready to hand it to FIDES?</h1>
                <p className="mt-4 text-slate-600">Submit this brief to generate your procurement plan. Vendor matching and quote comparison will plug into this flow next.</p>
                <div className="mt-8 rounded-2xl bg-[#f7f4ed] p-6"><p className="text-sm text-slate-500">Selected event</p><p className="mt-1 text-xl font-semibold">{eventType}</p><div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2"><span>✓ Date captured</span><span>✓ Guest count captured</span><span>✓ Location captured</span><span>✓ Requirements ready</span></div></div>
                <button type="submit" className="mt-8 w-full rounded-full bg-[#0b1220] px-6 py-4 font-medium text-white">Create my FIDES brief <ArrowRight className="ml-2 inline h-4 w-4" /></button>
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
