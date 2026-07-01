import type { ContourKind } from "@/lib/series";

const W = 400;
const H = 400;

/** smooth alternating wave across the width at height y */
function wave(y: number, amp: number, wl: number) {
  let d = `M -40 ${y}`;
  let up = true;
  for (let x = -40 + wl; x <= W + 40; x += wl) {
    d += ` Q ${x - wl / 2} ${y + (up ? -amp : amp)} ${x} ${y}`;
    up = !up;
  }
  return d;
}

/** sharp jagged line across the width at height y */
function jag(y: number, amp: number, wl: number) {
  let d = `M -40 ${y}`;
  let up = true;
  for (let x = -40 + wl; x <= W + 40; x += wl) {
    d += ` L ${x - wl / 2} ${y + (up ? -amp : amp)} L ${x} ${y}`;
    up = !up;
  }
  return d;
}

function lines(n: number, fn: (y: number, i: number) => string) {
  const step = H / (n + 1);
  return Array.from({ length: n }, (_, i) => fn(step * (i + 1), i));
}

/** Build the path set for each terrain character. */
function paths(kind: ContourKind): string[] {
  switch (kind) {
    case "ridge": // long parallel ridgelines
      return lines(7, (y) => wave(y, 13, 190));
    case "long": // many gentle lines — a long approach
      return lines(10, (y) => wave(y, 9, 150));
    case "rolling": // broad soft waves — granite steps & falls
      return lines(6, (y) => wave(y, 26, 230));
    case "karst": // jagged limestone pinnacles
      return lines(7, (y, i) => jag(y, 20 + (i % 2) * 8, 64));
    case "peak": // tight concentric rings — a sharp summit
      return [];
  }
}

export default function TerrainContour({
  kind,
  className = "",
  opacity = 1,
}: {
  kind: ContourKind;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{ opacity }}
      aria-hidden="true"
    >
      {kind === "peak"
        ? Array.from({ length: 8 }, (_, i) => (
            <ellipse
              key={i}
              cx={W / 2}
              cy={H / 2 + 20}
              rx={18 + i * 24}
              ry={12 + i * 19}
            />
          ))
        : paths(kind).map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
