# PRIME | OXYCHEM

An iPhone-inspired portfolio for PRIME and OXYCHEM, built with React, Vite,
Motion, and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

The production site is written to `dist/`. Netlify deployment configuration
and the local stats API are included.

## Free GitHub Pages hosting

The repository workflow builds this project and publishes it to GitHub Pages
whenever changes are pushed to `main`. The Pages build uses the repository
subpath, so the site and installable app assets work from the project page URL.
Before the first deployment, enable **Settings → Pages → Build and deployment
→ GitHub Actions** in the repository.

GitHub Pages is static hosting. Shared view and like counters are hidden there
until a stats API URL is configured as the `VITE_STATS_API` repository variable.
The local Vite API remains available for development, and the Netlify function
is retained for a future Netlify deployment.

## Featured projects

The Projects section links to the live OXYCHEM learning platform, Study Tracker,
Class 10 Statistics lesson, and Class 8 Light practice lab. Their preview
screenshots are stored in `public/projects/`.

The Social feed presents those four verified project links. Skill ratings show
how many of the linked projects demonstrate each area; they are not claimed as
self-assessed proficiency scores. The About map shows the broad WBBSE curriculum
region, not PRIME's personal location.

## Project contents

- `src/` — app sections, content, styles, and shared hooks
- `public/` — OXYCHEM branding, PWA icons, and sound effects
- `netlify/functions/` — hosted stats endpoint
- `server/` — local development stats endpoint
