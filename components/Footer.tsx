import GetaMark from "./GetaMark";

const SOCIALS = ["Instagram", "TikTok", "Strava"];

export default function Footer() {
  return (
    <footer className="bg-getah text-kabus">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <GetaMark className="h-8 w-8 text-kapur" />
              <span className="font-display text-3xl font-extrabold tracking-tight">GETA</span>
            </div>
            <p className="mt-3 font-display text-lg font-bold text-padu">
              From the kampung to the summit.
            </p>
            <p className="mt-2 text-sm text-kabus/60">
              Trail shoes built for Malaysian terrain, named after the mountains we climb.
            </p>
          </div>

          <div className="flex gap-12 font-mono text-xs uppercase tracking-widest">
            <div>
              <p className="mb-3 text-kabus/50">Jelajah</p>
              <ul className="space-y-2">
                <li>
                  <a href="#cerita" className="hover:text-padu">
                    Cerita
                  </a>
                </li>
                <li>
                  <a href="#siri" className="hover:text-padu">
                    Siri
                  </a>
                </li>
                <li>
                  <a href="#kenapa" className="hover:text-padu">
                    Kenapa getah
                  </a>
                </li>
                <li>
                  <a href="#waitlist" className="hover:text-padu">
                    Waitlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-kabus/50">Ikut kami</p>
              <ul className="space-y-2">
                {SOCIALS.map((social) => (
                  <li key={social}>
                    <a href="#waitlist" className="hover:text-padu">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-kabus/20 pt-6 font-mono text-[11px] uppercase tracking-widest text-kabus/50 sm:flex-row sm:justify-between">
          <span>© {2026} GETA. Buatan Malaysia.</span>
          <span>An independent brand — not affiliated with any existing footwear label.</span>
        </div>
      </div>
    </footer>
  );
}
