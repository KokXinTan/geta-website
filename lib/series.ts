export type Build = "low" | "boot";

/** Contour pattern key — each evokes the character of the peak's terrain. */
export type ContourKind = "ridge" | "peak" | "karst" | "rolling" | "long";

export type Series = {
  /** Collection name, e.g. "Tahan" */
  name: string;
  /** The peak it's named after */
  gunung: string;
  /** Summit elevation in metres — doubles as the series "number" */
  elevation_m: number;
  /** Malaysian state */
  state: string;
  /** What the terrain throws at you */
  terrain: string;
  /** Difficulty label */
  difficulty: string;
  /** Grip rating out of 5 */
  grip: number;
  /** Waterproofing rating out of 5 */
  water: number;
  /** Primary colourway background */
  color: string;
  /** Text colour that reads on `color` */
  ink: string;
  /** Product images per build */
  images: Record<Build, string>;
  /** One-line pitch */
  blurb: string;
  /** Short descriptor */
  hook: string;
  /** Contour pattern that maps to this peak's terrain */
  contour: ContourKind;
};

/** Each peak comes in two builds — same mountain, two ways up. */
export const BUILDS: Record<
  Build,
  { label: string; tag: string; note: string; sole: string }
> = {
  low: {
    label: "Low",
    tag: "Jalan",
    note: "Fast and light. Minimal low-profile trail-lifestyle.",
    sole: "/images/geta-sole-low.png",
  },
  boot: {
    label: "Boot",
    tag: "Redah",
    note: "Full protection. Mid-cut technical mountain boot.",
    sole: "/images/geta-sole-boot.png",
  },
};

export const SERIES: Series[] = [
  {
    name: "Tahan",
    gunung: "Gunung Tahan",
    elevation_m: 2187,
    state: "Pahang",
    terrain: "Rainforest ridgelines, river crossings, mud",
    difficulty: "Expedition",
    grip: 5,
    water: 4,
    color: "#ff5a1f",
    ink: "#17140f",
    images: { low: "/images/tahan-low.png", boot: "/images/tahan-boot.png" },
    blurb:
      "The all-rounder. Named after the highest peak in the Peninsula, tuned to handle whatever the backcountry puts in front of it.",
    hook: "Goes anywhere",
    contour: "ridge",
  },
  {
    name: "Kinabalu",
    gunung: "Gunung Kinabalu",
    elevation_m: 4095,
    state: "Sabah",
    terrain: "Granite slabs, cold, thin air, dawn summit push",
    difficulty: "Alpine",
    grip: 5,
    water: 3,
    color: "#1f9d57",
    ink: "#faf7ef",
    images: { low: "/images/kinabalu-low.png", boot: "/images/kinabalu-boot.png" },
    blurb:
      "The summit model. Sticky rubber for wet granite, warm enough for the 2am push to the roof of Borneo.",
    hook: "Made for the top",
    contour: "peak",
  },
  {
    name: "Mulu",
    gunung: "Gunung Mulu",
    elevation_m: 2376,
    state: "Sarawak",
    terrain: "Razor limestone pinnacles, caves, roots",
    difficulty: "Technical",
    grip: 5,
    water: 4,
    color: "#c6f24e",
    ink: "#17140f",
    images: { low: "/images/mulu-low.png", boot: "/images/mulu-boot.png" },
    blurb:
      "The technical one. Extra-deep lugs and a rock plate for the sharpest limestone in the country.",
    hook: "Grips the sharp stuff",
    contour: "karst",
  },
  {
    name: "Ledang",
    gunung: "Gunung Ledang",
    elevation_m: 1276,
    state: "Johor",
    terrain: "Waterfalls, granite steps, rope sections",
    difficulty: "Scramble",
    grip: 4,
    water: 4,
    color: "#ff3e7a",
    ink: "#17140f",
    images: { low: "/images/ledang-low.png", boot: "/images/ledang-boot.png" },
    blurb:
      "The scrambler. Light and grippy for steep granite steps, waterfalls and the odd rope section.",
    hook: "Steep and grippy",
    contour: "rolling",
  },
  {
    name: "Nuang",
    gunung: "Gunung Nuang",
    elevation_m: 1493,
    state: "Selangor",
    terrain: "Long approach, endless false peaks, KL training grind",
    difficulty: "Endurance",
    grip: 4,
    water: 3,
    color: "#2e6bff",
    ink: "#faf7ef",
    images: { low: "/images/nuang-low.png", boot: "/images/nuang-boot.png" },
    blurb:
      "The trainer. Cushioned for the punishing 18km round every KL hiker uses to get fit.",
    hook: "For the long grind",
    contour: "long",
  },
];
