# Maple & Thyme

React + Vite restaurant website with separate JSX and SCSS files for each page, component and section. No backend or admin panel.

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

On Windows PowerShell with script execution restricted, use `npm.cmd` instead of `npm`.

## Content and enquiries

Owner-supplied business details are in `src/data/business.js`. Contact includes the supplied email and Google Maps link. Reservations prepare a WhatsApp request for the supplied number, +91 89495 40259. The visitor must send the message in WhatsApp; only a reply from the restaurant can confirm availability. No personal details are persisted by the website.

Menu items, prices, hours, photos and video have not been supplied. These display coming-soon states. Gallery graphics are decorative CSS illustrations, explicitly labelled as such. Replace them with approved venue photography when available. Do not infer business facts from the design reference.

All six routes and a 404 page are implemented. Home includes the gallery preview; the shared footer is mounted once. Vercel SPA rewrites support direct page navigation. Other static hosts need an equivalent fallback to index.html.

## Verification

Production build and Oxlint are available through the scripts above. Browser checks cover all routes, 320px and 375px layouts, mobile navigation, required fields, date validation and the WhatsApp request link. External messages are not sent during testing.
