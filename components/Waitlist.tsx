"use client";

import { useState } from "react";
import ContourLines from "./ContourLines";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to an email provider (Resend / Mailchimp). Stubbed for launch.
    setDone(true);
  }

  return (
    <section id="waitlist" className="relative overflow-hidden hair-b border-getah/10 bg-padu">
      <ContourLines className="pointer-events-none absolute inset-0 h-full w-full text-getah/10" />

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="flex items-center justify-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-getah/70">
          <span className="inline-block h-2.5 w-2.5 bg-getah" aria-hidden="true" />
          Drop 001 · loading
        </p>
        <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-getah sm:text-6xl">
          First drop
          <br />
          lands soon.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-getah/80">
          Drop 001 is limited. Join the waitlist for early access, quiet colourway releases and
          the occasional trail invite.
        </p>

        {done ? (
          <div
            className="mx-auto mt-9 max-w-md bg-getah px-6 py-7 text-kabus shadow-soft-lg"
            role="status"
          >
            <p className="font-display text-2xl font-bold">You&apos;re on the list.</p>
            <p className="mt-1 text-sm text-kabus/70">
              We&apos;ll email you before drop 001 lands. Nothing else.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="min-w-0 flex-1 bg-susu px-4 py-3.5 font-mono text-sm text-getah placeholder:text-getah/40 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-getah px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-kabus transition-colors hover:bg-susu hover:text-getah"
            >
              Notify me
            </button>
          </form>
        )}
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-getah/60">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
