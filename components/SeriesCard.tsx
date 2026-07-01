"use client";

import { useState } from "react";
import Image from "next/image";
import { BUILDS, SPEC_LABELS, GRIP_INDEX, SOLE, type Build, type Series } from "@/lib/series";
import TerrainContour from "./TerrainContour";

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
            className="h-2.5 w-5 transition-colors"
            style={{ backgroundColor: i < value ? color : "rgba(23,20,15,0.1)" }}
          />
        ))}
      </span>
    </div>
  );
}

export default function SeriesCard({ series, index }: { series: Series; index: number }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  const bg = index % 2 === 0 ? "bg-susu" : "bg-kabus";

  const [build, setBuild] = useState<Build>("low");
  const [sole, setSole] = useState(false);
  const specs = BUILDS[build].specs;

  return (
    <article className={`hair-b border-getah/10 ${bg}`}>
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:gap-16 md:px-8 md:py-24 ${
          flip ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
        }`}
      >
        {/* product tile — hover/tap flips to the GETA sole */}
        <div className={`relative ${flip ? "md:order-2" : ""}`}>
          <button
            type="button"
            onMouseEnter={() => setSole(true)}
            onMouseLeave={() => setSole(false)}
            onFocus={() => setSole(true)}
            onBlur={() => setSole(false)}
            onClick={() => setSole((s) => !s)}
            aria-label={`${series.name} ${BUILDS[build].label} — ${sole ? "show the shoe" : "show the GETA sole"}`}
            className="group relative block w-full overflow-hidden hair border-getah/10 shadow-soft-lg"
            style={{ backgroundColor: "#e7e3da" }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={series.images[build]}
                alt={`The GETA ${series.name} ${BUILDS[build].label}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-500 ${sole ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src={SOLE}
                alt="The GETA contour outsole — the same sole on every pair"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-500 ${sole ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <span className="pointer-events-none absolute bottom-3 right-3 border border-getah/15 bg-kabus/85 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-getah/70 backdrop-blur">
              {sole ? "GETA™ outsole" : "Hover for sole"}
            </span>
          </button>
        </div>

        {/* edition + build readout */}
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

          {/* the one part that changes: a contour design pattern on this colour */}
          <div className="mt-5 overflow-hidden hair border-getah/15">
            <div
              className="relative h-20"
              style={{ backgroundColor: series.color, color: series.ink }}
            >
              <TerrainContour
                kind={series.contour}
                className="absolute inset-0 h-full w-full"
                opacity={0.55}
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
                  Corak kontur
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-80">
                  {series.name}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-getah/40">
            The one part that changes — this contour pattern, on {series.name} fabric.
          </p>

          <p className="mt-4 max-w-md text-lg leading-relaxed text-getah/75">{series.blurb}</p>

          {/* build toggle — sets the platform + specs */}
          <div className="mt-6 inline-flex hair border-getah/20">
            {(Object.keys(BUILDS) as Build[]).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBuild(b)}
                aria-pressed={build === b}
                className="px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-colors"
                style={
                  build === b
                    ? { backgroundColor: series.color, color: series.ink }
                    : { color: "rgba(23,20,15,0.55)" }
                }
              >
                {BUILDS[b].label}
              </button>
            ))}
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-getah/60">
            {BUILDS[build].note}
          </p>

          {/* elevation figure */}
          <div className="mt-6 flex items-end gap-3">
            <span className="font-display text-6xl font-extrabold leading-none tabular-nums text-getah sm:text-7xl">
              {series.elevation_m.toLocaleString()}
            </span>
            <span className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-getah/50">
              metres
              <br />
              above sea
            </span>
          </div>

          {/* grip is the shared GETA sole; the rest is set by the build */}
          <div className="mt-6">
            <Meter label="Grip · GETA™ sole" value={GRIP_INDEX} color={series.color} />
            {SPEC_LABELS.map((s) => (
              <Meter key={s.key} label={s.label} value={specs[s.key]} color={series.color} />
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-getah/40">
            Grip is the GETA™ sole — same on every pair. Rest set by build · {BUILDS[build].label}.
          </p>
        </div>
      </div>
    </article>
  );
}
