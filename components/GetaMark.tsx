/** GETA's own mark: a rubber droplet whose ripples read as a contour-mapped peak. */
export default function GetaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* outer contour / droplet body */}
      <path d="M24 4 C 33 18 42 26 42 34 A 18 18 0 0 1 6 34 C 6 26 15 18 24 4 Z" />
      {/* mid contour — a nested peak */}
      <path d="M24 16 L34 33 H14 Z" />
      {/* summit contour */}
      <path d="M24 24 L29 32 H19 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
