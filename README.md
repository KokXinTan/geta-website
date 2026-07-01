# GETA

**From the kampung to the summit.**

Brand landing + lookbook for GETA — a Malaysian outdoor/lifestyle footwear brand that
reimagines the humble black rubber *kasut getah* (kampung shoe) as minimal, clean, fashionable
trail gear. Collections are named after Malaysian peaks (Tahan, Kinabalu, Mulu, Ledang, Nuang)
and speced to their terrain.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Fonts: Bricolage Grotesque (display), Hanken Grotesk (body), Space Mono (technical labels)
- Imagery generated with Google's Gemini image models

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm run lint
```

## Structure

```
app/            layout (fonts, metadata), page, global tokens & utilities
components/     Nav, Hero, Manifesto, SeriesShowcase/SeriesCard, WhyGetah, Waitlist, Footer
                ContourLines (topographic signature), GetaMark (logo)
lib/series.ts   single source of truth for the collections
public/images/  brand imagery
```

## Notes

- The collections and their elevation/terrain data live in `lib/series.ts` — edit there.
- The waitlist form is a client-side stub; wire `handleSubmit` in `components/Waitlist.tsx` to an
  email provider (Resend / Mailchimp) when ready.
- Independent brand — not affiliated with any existing footwear label.
