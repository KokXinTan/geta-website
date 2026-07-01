/**
 * Renders a peak's real topographic contour (SVG path fetched from DEM data,
 * see lib/contours.ts). viewBox is 0 0 400 400.
 */
export default function TerrainContour({
  d,
  className = "",
  stroke = "currentColor",
  opacity = 1,
}: {
  d: string;
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth={1}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path d={d} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
