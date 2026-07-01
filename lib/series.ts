export type Build = "low" | "boot";

/** Contour pattern key — each is the topography of the peak's terrain. */
export type ContourKind = "ridge" | "peak" | "karst" | "rolling" | "long";

/**
 * The GETA™ contour sole is shared across the whole range, so grip is a
 * constant — same on every pair. The specs that vary are the ones the upper
 * (the build) controls.
 */
export const GRIP_INDEX = 5;

/** Set by the build (the upper/cut), not the colourway. */
export type Specs = { water: number; cushion: number; support: number };

export const SPEC_LABELS: { key: keyof Specs; label: string }[] = [
  { key: "water", label: "Kalis air" },
  { key: "cushion", label: "Bantalan" },
  { key: "support", label: "Sokongan" },
];

/**
 * Two builds share one platform and one GETA™ contour sole. The build sets the
 * performance; the peak edition swaps in a colour + that mountain's contour.
 */
/** One GETA™ contour sole across the whole range — every pair, both builds. */
export const SOLE = "/images/geta-sole-low.png";

export const BUILDS: Record<
  Build,
  { label: string; tag: string; note: string; specs: Specs }
> = {
  low: {
    label: "Low",
    tag: "Jalan",
    note: "Fast and light. Minimal low-profile trail-lifestyle.",
    specs: { water: 3, cushion: 4, support: 2 },
  },
  boot: {
    label: "Boot",
    tag: "Redah",
    note: "Full protection. Mid-cut technical mountain boot.",
    specs: { water: 5, cushion: 3, support: 5 },
  },
};

export type Series = {
  /** Edition name, e.g. "Tahan" */
  name: string;
  /** The peak it's named after */
  gunung: string;
  /** Summit elevation in metres — doubles as the edition "number" */
  elevation_m: number;
  /** Malaysian state */
  state: string;
  /** What the mountain throws at you */
  terrain: string;
  /** The mountain's difficulty (describes the peak, not the shoe) */
  difficulty: string;
  /** Primary colourway */
  color: string;
  /** Text colour that reads on `color` */
  ink: string;
  /** Product images per build */
  images: Record<Build, string>;
  /** One-line edition story */
  blurb: string;
  /** Short edition descriptor */
  hook: string;
  /** Contour pattern — this peak's topography, printed on the heel panel */
  contour: ContourKind;
};

export const SERIES: Series[] = [
  {
    name: "Tahan",
    gunung: "Gunung Tahan",
    elevation_m: 2187,
    state: "Pahang",
    terrain: "Rainforest ridgelines, river crossings, mud",
    difficulty: "Expedition",
    color: "#ff5a1f",
    ink: "#17140f",
    images: { low: "/images/tahan-low.png", boot: "/images/tahan-boot.png" },
    blurb:
      "The home peak. The highest point in the Peninsula, drawn into the Tahan contour pattern — and where every GETA gets tested.",
    hook: "Home peak",
    contour: "ridge",
  },
  {
    name: "Kinabalu",
    gunung: "Gunung Kinabalu",
    elevation_m: 4095,
    state: "Sabah",
    terrain: "Granite slabs, cold, thin air, dawn summit push",
    difficulty: "Alpine",
    color: "#1f9d57",
    ink: "#faf7ef",
    images: { low: "/images/kinabalu-low.png", boot: "/images/kinabalu-boot.png" },
    blurb:
      "Borneo's roof. The contour of Kinabalu's granite summit — the highest point in Southeast Asia — in alpine green.",
    hook: "Borneo's roof",
    contour: "peak",
  },
  {
    name: "Mulu",
    gunung: "Gunung Mulu",
    elevation_m: 2376,
    state: "Sarawak",
    terrain: "Razor limestone pinnacles, caves, roots",
    difficulty: "Technical",
    color: "#c6f24e",
    ink: "#17140f",
    images: { low: "/images/mulu-low.png", boot: "/images/mulu-boot.png" },
    blurb:
      "The limestone edition. Gunung Mulu's razor-sharp pinnacles traced across the panel, in electric lime.",
    hook: "Limestone",
    contour: "karst",
  },
  {
    name: "Ledang",
    gunung: "Gunung Ledang",
    elevation_m: 1276,
    state: "Johor",
    terrain: "Waterfalls, granite steps, rope sections",
    difficulty: "Scramble",
    color: "#ff3e7a",
    ink: "#17140f",
    images: { low: "/images/ledang-low.png", boot: "/images/ledang-boot.png" },
    blurb:
      "The legend. Gunung Ledang — myth, waterfalls and rope sections — mapped in hibiscus.",
    hook: "The legend",
    contour: "rolling",
  },
  {
    name: "Nuang",
    gunung: "Gunung Nuang",
    elevation_m: 1493,
    state: "Selangor",
    terrain: "Long approach, endless false peaks, KL training grind",
    difficulty: "Endurance",
    color: "#2e6bff",
    ink: "#faf7ef",
    images: { low: "/images/nuang-low.png", boot: "/images/nuang-boot.png" },
    blurb:
      "The training ground. The endless grind every KL hiker uses to get fit, mapped in cobalt.",
    hook: "Training ground",
    contour: "long",
  },
];
