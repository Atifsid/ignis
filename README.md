# Ignis & Electrical Protection LLP — website

Static marketing site built with [Astro](https://astro.build). It builds to plain HTML/CSS in `dist/`, so it can be hosted anywhere (Netlify, Vercel, GitHub Pages, cPanel).

## Commands

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site
```

## Editing content

Almost everything lives in [`src/data/site.ts`](src/data/site.ts):

- `company`: name, phone numbers, email, address, WhatsApp number, optional form endpoint
- `services`: the six services and the systems under each. Pages under `/services/<slug>` are generated from this list
- `capabilities`, `process`, `industries`: home and about page sections
- `clients`, `certifications`: empty by default. Each section appears on the home page only once it has entries
- `heroSlides`: photos and captions for the home page slideshow

Photos go in `src/assets/img/` and are resized and converted to WebP at build time.

## Contact form

With `company.formEndpoint` empty, the form opens the visitor's email app with the enquiry filled in. To receive submissions directly, create a form on a service such as Formspree or Web3Forms and paste its endpoint URL into `formEndpoint`.
