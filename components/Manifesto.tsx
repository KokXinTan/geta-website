import Image from "next/image";

export default function Manifesto() {
  return (
    <section id="cerita" className="hair-b border-getah/10 bg-susu">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16 md:px-8 md:py-28">
        <div className="relative order-2 md:order-1">
          <div className="overflow-hidden hair border-getah/10 shadow-soft-lg">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/heritage.png"
                alt="A worn pair of classic black rubber kampung shoes on a muddy jungle floor"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="hair-t border-getah/10 bg-kabus px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-getah/60">
              The original — kasut getah, c. forever
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-5 flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-getah/60">
            <span className="inline-block h-2.5 w-2.5 bg-padu" aria-hidden="true" />
            The story
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-getah sm:text-5xl">
            The best trail shoe in Malaysia cost RM15.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-getah/70">
            <p>
              For generations the black rubber <em>kasut getah</em> did it all — rubber
              tapping at dawn, wading rivers, scrambling up muddy ridges. Cheap, grippy,
              near indestructible. The gear nobody photographed but everybody trusted.
            </p>
            <p>
              City folk wrote it off. The people who actually knew the ulu never bothered with
              anything else.
            </p>
            <p className="font-display text-2xl font-bold text-getah">
              We kept the grip. Rebuilt everything else.
            </p>
            <p>
              GETA takes that no-nonsense rubber sole, engineers it for real trails, and gives
              it a build that holds its own well past the trailhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
