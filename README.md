# Kaushtubh Singh — Portfolio

A premium, animated portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## Project structure

```
src/
  assets/portrait.jpg      # hero portrait
  components/
    Hero.jsx                # hero section with portrait + intro
    About.jsx                # bio + metrics
    Work.jsx                 # experience + projects
    Skills.jsx                # toolkit, education, certifications
    Contact.jsx               # socials + email
    OrbitController.jsx      # bottom-left circular nav + WhatsApp button
    Eyebrow.jsx, Reveal.jsx   # small shared UI helpers
  data.js                    # all editable content (nav, socials, skills, projects, education)
  App.jsx
  main.jsx
  index.css
public/
  resume.pdf                 # downloadable resume, linked from the Hero "Resume" button
```

## Editing content

Almost everything (nav links, socials, skills, projects, education, certifications) lives in
`src/data.js` — edit that file to update content without touching component code.

To replace the portrait, swap `src/assets/portrait.jpg` with a new image of the same name
(or update the import path in `src/components/Hero.jsx`).

To replace the resume, swap `public/resume.pdf` with a new file of the same name.

## Notes

- Colors and fonts are defined in `tailwind.config.js` (gold/black palette) and loaded via
  Google Fonts in `index.html` (Cormorant Garamond, Inter, JetBrains Mono).
- The WhatsApp number in `OrbitController.jsx` is set to `https://wa.me/917985262313` — update
  if needed.
# Kaushtubh
