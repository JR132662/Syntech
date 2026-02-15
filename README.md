# Syntech Turf – Next.js website

Modern, lead-focused marketing site for [Syntech Turf](https://syntechturf.com/) (artificial turf & green walls, South Florida).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Features

- **Lead-focused**: Hero and sticky header CTAs, product category “Get a quote” links, and a dedicated contact form.
- **Sections**: Benefits, product categories (residential, golf, sports, green walls), testimonials, contact form.
- **Brand**: Dark theme with Syntech green accents; Outfit + DM Sans typography.
- **Responsive**: Mobile-first layout with a simple mobile nav.

## Logo

The header uses a text logo (SYNTECH / TURF). To use your image logo, add `public/logo.png` and update `src/components/Logo.tsx` to use `next/image` with that file.

## Contact form

The contact form is client-side only. To capture leads, wire it to your backend or a service (e.g. Formspree, Netlify Forms, or your API).

## Contact

- **Phone**: (954) 478-5131  
- **Address**: 21113 Johnson Street, #106, Pembroke Pines, FL 33029
