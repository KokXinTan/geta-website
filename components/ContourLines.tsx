/**
 * Signature element: a field of topographic contour lines.
 * `animate` draws them in on load (disabled under prefers-reduced-motion via CSS).
 */
export default function ContourLines({
  className = "",
  stroke = "currentColor",
  animate = false,
  opacity = 1,
}: {
  className?: string;
  stroke?: string;
  animate?: boolean;
  opacity?: number;
}) {
  const rings = [
    "M-40 320 C 160 200 360 400 620 260 S 1040 120 1240 300",
    "M-40 360 C 180 250 380 430 640 300 S 1050 180 1240 340",
    "M-40 400 C 200 300 400 460 660 340 S 1060 240 1240 380",
    "M-40 440 C 220 350 420 500 680 380 S 1070 300 1240 420",
    "M-40 480 C 240 400 440 540 700 420 S 1080 360 1240 460",
  ];
  return (
    <svg
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      style={{ opacity }}
      aria-hidden="true"
    >
      {rings.map((d, i) => (
        <path
          key={d}
          d={d}
          className={animate ? `contour-path contour-path--${i + 1}` : undefined}
        />
      ))}
    </svg>
  );
}
