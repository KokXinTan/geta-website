const FEATURES = [
  {
    code: "GT-01",
    tag: "Cengkam",
    title: "Grip that holds",
    body: "Deep vulcanised rubber lugs bite into wet granite, mud and mossy roots. Sure footing where the trail turns nasty.",
    color: "#ff5a1f",
  },
  {
    code: "GT-02",
    tag: "Kalis air",
    title: "River-ready",
    body: "Rubber shrugs off crossings and monsoon downpours. Wade in, keep walking, dry out fast.",
    color: "#2e6bff",
  },
  {
    code: "GT-03",
    tag: "Tahan lasak",
    title: "Built to be resoled",
    body: "Vulcanised and stitched, not glued and tossed. Suede that only wears in better, and an outsole you replace when the tread finally goes — so the shoe outlasts the seasons.",
    color: "#1f9d57",
  },
  {
    code: "GT-04",
    tag: "Ringan",
    title: "Light on your feet",
    body: "Low weight and a natural flex, so your legs still have something left on the way back down.",
    color: "#ff3e7a",
  },
];

export default function WhyGetah() {
  return (
    <section id="kenapa" className="hair-b border-getah/10 bg-susu">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-getah/60">
            <span className="inline-block h-2.5 w-2.5 bg-padu" aria-hidden="true" />
            The technology
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-getah sm:text-5xl">
            The original had it right.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-getah/70">
            We didn&apos;t invent any of this. We kept what already worked and rebuilt the rest
            to match — then gave every part a name and a spec.
          </p>
        </div>

        <div className="mt-14 grid gap-px hair border-getah/10 bg-getah/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.code}
              className="group relative bg-susu p-7 transition-colors hover:bg-kabus"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: feature.color }}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-getah/50">
                <span>{feature.code}</span>
                <span>{feature.tag}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold leading-tight text-getah">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-getah/70">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
