import Image from "next/image";
import { asset } from "@/lib/asset";
import ContourLines from "./ContourLines";

const TICKER = [
  "From the kampung to the summit",
  "Rubber-soled",
  "Trail-tested in Malaysia",
  "GETAH™ outsole compound",
  "Built for the ulu",
];

const SPECS = ["GETAH™ outsole", "5.0 grip index", "Kalis air", "Made in MY"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hair-b border-getah/10 bg-kabus">
      <ContourLines
        className="pointer-events-none absolute inset-0 h-full w-full text-getah/[0.06]"
        animate
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 md:px-8 md:pb-24 md:pt-24">
        <div>
          <p className="mb-6 flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-getah/60">
            <span className="inline-block h-2.5 w-2.5 bg-padu" aria-hidden="true" />
            Malaysian trail division
          </p>
          <h1 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-getah sm:text-7xl md:text-[5.5rem]">
            From the
            <br />
            kampung
            <br />
            to the <span className="text-padu">summit.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-getah/70">
            The black rubber kampung shoe has quietly been the best thing on Malaysian trails
            for decades. We re-engineered it — same legendary grip, everything else rebuilt for
            performance.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#waitlist"
              className="bg-getah px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-kabus transition-colors hover:bg-padu hover:text-getah"
            >
              Join the waitlist
            </a>
            <a
              href="#siri"
              className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-getah underline decoration-padu decoration-2 underline-offset-8 hover:text-padu"
            >
              Explore the series
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-getah/50">
            {SPECS.map((spec) => (
              <li key={spec} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-getah/40" aria-hidden="true" />
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden hair border-getah/10 bg-susu shadow-soft-lg">
            <div className="relative aspect-square w-full md:aspect-[4/5]">
              <Image
                src={asset("/images/hero.png")}
                alt="The GETA Tahan Low in burnt orange on wet mossy granite, misty rainforest ridgeline behind at golden hour"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between hair-t border-getah/10 bg-susu px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-getah/70">
              <span className="font-bold text-getah">Siri 01 · Tahan Low</span>
              <span>2,187 mdpl</span>
            </div>
          </div>
        </div>
      </div>

      {/* technical ticker */}
      <div className="overflow-hidden hair-t border-getah/10 bg-getah">
        <div className="marquee-track flex w-max whitespace-nowrap py-3">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((word, i) => (
            <span
              key={i}
              className="mx-5 font-mono text-xs uppercase tracking-[0.15em] text-kabus/70"
            >
              <span className="mr-5 text-padu" aria-hidden="true">
                /
              </span>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
