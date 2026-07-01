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
            One shoe, built two ways.
            <span className="text-kabus/40"> Five peaks, five contours.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-kabus/60">
            Every GETA rides the same platform and the same GETA™ contour sole — same grip on
            every pair. The build sets the cut and cushion: fast-and-light Low or full-protection
            Boot. The edition changes one thing — a colour, and a contour pattern on that fabric.
            Hover any shoe for the sole.
          </p>
        </div>
      </div>

      {SERIES.map((series, index) => (
        <SeriesCard key={series.name} series={series} index={index} />
      ))}
    </section>
  );
}
