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
  /** Grip rating out of 5 (lug + compound) */
  grip: number;
  /** Waterproofing rating out of 5 */
  water: number;
  /** Primary colourway background */
  color: string;
  /** Text colour that reads on `color` */
  ink: string;
  /** Product image in /public/images */
  image: string;
  /** One-line pitch */
  blurb: string;
  /** Short Malay/Manglish hook */
  hook: string;
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
    image: "/images/product-tahan.png",
    blurb:
      "The all-rounder. Named after the highest peak in the Peninsula, tuned to handle whatever the backcountry puts in front of it.",
    hook: "Goes anywhere",
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
    image: "/images/product-kinabalu.png",
    blurb:
      "The summit model. Sticky rubber for wet granite, warm enough for the 2am push to the roof of Borneo.",
    hook: "Made for the top",
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
    image: "/images/product-mulu.png",
    blurb:
      "The technical one. Extra-deep lugs and a rock plate for the sharpest limestone in the country.",
    hook: "Grips the sharp stuff",
  },
  {
    name: "Ledang",
    gunung: "Gunung Ledang",
    elevation_m: 1276,
    state: "Johor",
    terrain: "Waterfalls, granite steps, weekend crowds",
    difficulty: "Moderate",
    grip: 4,
    water: 4,
    color: "#ff3e7a",
    ink: "#17140f",
    image: "/images/product-ledang.png",
    blurb:
      "The everyday. Light and comfortable enough for a first hike or the walk to the kopitiam.",
    hook: "City to trailhead",
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
    image: "/images/product-nuang.png",
    blurb:
      "The trainer. Cushioned for the punishing 18km round every KL hiker uses to get fit.",
    hook: "For the long grind",
  },
];
