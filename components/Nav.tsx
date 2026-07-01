import GetaMark from "./GetaMark";

const LINKS = [
  { href: "#cerita", label: "Story" },
  { href: "#siri", label: "Series" },
  { href: "#kenapa", label: "Technology" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 hair-b border-getah/10 bg-kabus/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 text-getah" aria-label="GETA home">
          <GetaMark className="h-6 w-6" />
          <span className="font-display text-xl font-extrabold tracking-tight">GETA</span>
        </a>

        <ul className="hidden items-center gap-9 font-mono text-[11px] uppercase tracking-[0.15em] text-getah/70 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-getah">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#waitlist"
          className="bg-getah px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-kabus transition-colors hover:bg-padu hover:text-getah"
        >
          Waitlist
        </a>
      </nav>
    </header>
  );
}
