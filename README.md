# Avg Joe Mountaineering

A personal mountaineering site: past summits, planned trips, a route map with live weather, elevation profiles, gear reviews, an elevation-based gear buying guide, a photo gallery, a chronological timeline, and a contact page. Built with [Astro](https://astro.build) + Tailwind CSS, deployed free on GitHub Pages.

## First time here?

1. Read **SETUP.md** — one-time steps to get this live on your own GitHub Pages URL and to wire up the free contact form.
2. Read **CONTENT_GUIDE.md** — how to add summits, planned trips, blog posts, and gear reviews. No terminal required after initial setup; everything is a Markdown file editable from GitHub.com.
3. Read **ADMIN_SETUP.md** (optional) — set up a real form-based admin panel at `/admin` instead of editing Markdown directly.

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
  components/           # Nav, Footer, Hero, cards, the Leaflet map, elevation chart, weather widget, etc.
  styles/global.css     # Tailwind v4 theme (colors, fonts, animations)
public/admin/          # Decap CMS admin panel (see ADMIN_SETUP.md)
cms-oauth-worker/      # tiny Cloudflare Worker that powers admin login (see ADMIN_SETUP.md)
```

Renaming the site title? It's the `siteTitle` constant near the top of `src/layouts/BaseLayout.astro` — change it there and the nav, footer, and page `<title>` tags all update.
