# Muhammad Saleem — Portfolio

Personal portfolio site: skills and stack, personal projects, education and certificates.

Built with React + Vite. All page content lives in [`src/data/content.js`](src/data/content.js) —
edit that file to update the site; the components render from it.

## Structure

```
index.html            page shell (fonts, title)
src/main.jsx          React entry
src/App.jsx           section order
src/index.css         all styles
src/data/content.js   every piece of page content
src/components/       Hero, Skills, Projects, Education, OtherSkills, Footer
```

## Running locally

```sh
npm install
npm run dev
```

Then visit http://localhost:5173

## Build

```sh
npm run build     # outputs to dist/
npm run preview   # serve the production build
npm run lint
```

## Deployment

Deployed on Vercel from this repository. Pushes to `main` deploy automatically.
Vercel auto-detects Vite (build `npm run build`, output `dist`).
