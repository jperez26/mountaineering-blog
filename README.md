# Summit Journal

A personal mountaineering site: past summits, planned trips, a route map, gear reviews, an elevation-based gear buying guide, a photo gallery, a chronological timeline, and a contact page. Built with [Astro](https://astro.build) + Tailwind CSS, deployed free on GitHub Pages.

## First time here?

1. Read **SETUP.md** — one-time steps to get this live on your own GitHub Pages URL and to wire up the free contact form.
2. Read **CONTENT_GUIDE.md** — how to add summits, planned trips, blog posts, and gear reviews. No terminal required after initial setup; everything is a Markdown file editable from GitHub.com.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in ./dist — this is what the deploy workflow runs
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  content/climbs/     # summits + planned trips (one collection, filtered by `status`)
  content/blog/        # blog posts
  content/gear/         # gear reviews
  data/gearByElevation.ts  # the elevation-tiered buying guide content
  pages/                # one file per route
  components/           # Nav, Footer, Hero, cards, the Leaflet map, etc.
  styles/global.css     # Tailwind v4 theme (colors, fonts, animations)
```

Renaming the site title? It's the `siteTitle` constant near the top of `src/layouts/BaseLayout.astro` — change it there and the nav, footer, and page `<title>` tags all update.
