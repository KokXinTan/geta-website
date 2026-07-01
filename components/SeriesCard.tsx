"use client";

import { useState } from "react";
import Image from "next/image";
import { BUILDS, type Build, type Series } from "@/lib/series";
import { CONTOURS } from "@/lib/contours";
import TerrainContour from "./TerrainContour";

export default function SeriesCard({ series, index }: { series: Series; index: number }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  const bg = index % 2 === 0 ? "bg-susu" : "bg-kabus";

  const [build, setBuild] = useState<Build>("low");
  const [sole, setSole] = useState(false);

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
                src={`/images/sole-${series.name.toLowerCase()}.png`}
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

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-5xl font-extrabold leading-none tracking-tight text-getah sm:text-6xl">
              {series.name}
            </h3>
            <span className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-getah/55">
              {series.elevation_m.toLocaleString()} m{" "}
              <span className="text-getah/35">above sea</span>
            </span>
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-getah/50">
            {series.gunung} · {series.difficulty} · {series.hook}
          </p>

          {/* the one part that changes: this peak's REAL contour on the colour */}
          <div className="mt-5 overflow-hidden hair border-getah/15">
            <div
              className="relative h-24"
              style={{ backgroundColor: series.color, color: series.ink }}
            >
              <TerrainContour
                d={CONTOURS[series.name.toLowerCase()]}
                className="absolute inset-0 h-full w-full"
                opacity={0.6}
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
                  Kontur sebenar
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-80">
                  {series.gunung}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-getah/40">
            The one part that changes — {series.gunung}&apos;s real topography, on {series.name}{" "}
            fabric.
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
        </div>
      </div>
    </article>
  );
}
