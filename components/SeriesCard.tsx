import Image from "next/image";
import type { Series } from "@/lib/series";

function Meter({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 hair-t border-getah/10">
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-getah/60">
        {label}
      </span>
      <span className="flex gap-1" aria-label={`${label} ${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="h-2.5 w-5"
            style={{ backgroundColor: i < value ? color : "rgba(23,20,15,0.1)" }}
          />
        ))}
      </span>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 hair-t border-getah/10">
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-getah/60">
        {label}
      </span>
      <span className="max-w-[62%] text-right font-mono text-[11px] uppercase tracking-[0.08em] text-getah/80">
        {value}
      </span>
    </div>
  );
}

export default function SeriesCard({ series, index }: { series: Series; index: number }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  const bg = index % 2 === 0 ? "bg-susu" : "bg-kabus";

  return (
    <article className={`hair-b border-getah/10 ${bg}`}>
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24 ${
          flip ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
        }`}
      >
        {/* product tile — colourway baked into the shot */}
        <div className={`relative ${flip ? "md:order-2" : ""}`}>
          <div className="overflow-hidden hair border-getah/10 shadow-soft-lg">
            <div className="relative aspect-square w-full" style={{ backgroundColor: series.color }}>
              <Image
                src={series.image}
                alt={`The GETA ${series.name} trail shoe`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className="flex items-center justify-between px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em]"
              style={{ backgroundColor: series.color, color: series.ink }}
            >
              <span className="font-bold">GETA {series.name}</span>
              <span className="opacity-70">{series.color}</span>
            </div>
          </div>
        </div>

        {/* technical readout */}
        <div className={flip ? "md:order-1" : ""}>
          <p className="mb-3 flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-getah/60">
            <span
              className="inline-block h-2.5 w-2.5"
              style={{ backgroundColor: series.color }}
              aria-hidden="true"
            />
            Siri {num} · {series.state}
          </p>

          <h3 className="font-display text-5xl font-extrabold leading-none tracking-tight text-getah sm:text-6xl">
            {series.name}
          </h3>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-getah/50">
            {series.gunung} · {series.difficulty} · {series.hook}
          </p>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-getah/70">{series.blurb}</p>

          {/* elevation as the headline figure */}
          <div className="mt-7 flex items-end gap-3">
            <span className="font-display text-6xl font-extrabold leading-none tabular-nums text-getah sm:text-7xl">
              {series.elevation_m.toLocaleString()}
            </span>
            <span className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-getah/50">
              metres
              <br />
              above sea
            </span>
          </div>

          <div className="mt-7">
            <SpecRow label="Terrain" value={series.terrain} />
            <Meter label="Grip" value={series.grip} color={series.color} />
            <Meter label="Kalis air" value={series.water} color={series.color} />
          </div>
        </div>
      </div>
    </article>
  );
}
