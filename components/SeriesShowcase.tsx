import { SERIES } from "@/lib/series";
import SeriesCard from "./SeriesCard";

export default function SeriesShowcase() {
  return (
    <section id="siri" className="bg-kabus">
      <div className="hair-b border-getah/10 bg-getah text-kabus">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-kabus/50">
            <span className="inline-block h-2.5 w-2.5 bg-padu" aria-hidden="true" />
            The collections
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Five peaks. Five shoes.
            <span className="text-kabus/40"> Each tuned to its own terrain.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-kabus/60">
            Every GETA is named after a Malaysian mountain and built for what it demands. The
            figure on each shoe is the summit it&apos;s made to reach.
          </p>
        </div>
      </div>

      {SERIES.map((series, index) => (
        <SeriesCard key={series.name} series={series} index={index} />
      ))}
    </section>
  );
}
