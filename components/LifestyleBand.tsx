import Image from "next/image";

export default function LifestyleBand() {
  return (
    <section className="relative hair-b border-getah/10">
      <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/lifestyle-summit.png"
          alt="A hiker on a misty Malaysian granite summit above a sea of clouds"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-getah/80 via-getah/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-16">
            <p className="flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-kabus/80">
              <span className="inline-block h-2.5 w-2.5 bg-padu" aria-hidden="true" />
              In the wild
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-kabus sm:text-5xl">
              Made for the mountains that made it.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
