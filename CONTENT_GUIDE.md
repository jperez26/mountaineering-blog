# Adding Content (No Terminal Required)

Everything on this site — summits, planned trips, blog posts, gear reviews — is just a text file. You can add or edit any of them straight from GitHub.com, using the **Add file → Create new file** button in the right folder. No git commands needed. A few seconds after you commit the file, the site rebuilds and publishes automatically.

## Adding a photo first

1. Go to the right folder in the repo on GitHub.com:
   - Summit/planned-trip photos → `public/images/climbs/`
   - Blog post photos → `public/images/blog/`
   - Gear photos → `public/images/gear/`
2. Click **Add file → Upload files**, drag your photo in, and commit.
3. Note the path, e.g. `/images/climbs/my-photo.jpg` — you'll paste that into the frontmatter below.
4. Keep filenames simple: lowercase, no spaces (use hyphens: `denali-summit.jpg`).

If you skip this step, leave the `heroImage`/`image` field pointing at one of the existing placeholder SVGs in `/images/placeholders/` and the page will still work — you can add real photos later.

## Add a summit or planned trip

Create a new file in `src/content/climbs/`, named like `mountain-name-year.md`, with this content:

```md
---
title: "Mountain Name — Route Name"
mountain: "Mountain Name"
elevationFt: 14000
elevationM: 4267
elevationGainFt: 7000     # optional — vertical gain from trailhead to summit, powers the homepage's "Total Elevation Gain" stat
region: "Range, Country"
status: "completed"        # or "planned"
date: 2026-07-01           # date climbed, or target date if planned — omit entirely for a "someday" goal with no fixed date
difficulty: "Moderate"     # optional
route: "Route Name"        # optional
coordinates: [40.0, -105.0]  # optional — [latitude, longitude], powers the Map page + live weather widget
heroImage: "/images/climbs/your-photo.jpg"
gallery:
  - "/images/climbs/your-photo.jpg"
  - "/images/climbs/another-photo.jpg"
profile:                   # optional — powers the Route Profile chart on the detail page
  - label: "Trailhead"
    elevationFt: 6000
  - label: "Camp 1"
    elevationFt: 9500
  - label: "Summit"
    elevationFt: 14000
summary: "One or two sentences that show up on the card and list pages."
---

Write the full trip report here in normal text/Markdown. This becomes the body of the detail page.
```

Set `status: completed` and it shows up on **/summits**. Set `status: planned` and it shows up on **/planned** instead. Either way it automatically appears on **/timeline** and **/map** (if you included `coordinates`) — no other file needs to change.

Leaving out `date` entirely (rather than guessing one) marks it as a long-term "someday" goal — it'll show up on **/planned** and get its own "Long-Term Goals" section on **/timeline**, without being forced into the middle of your chronological list.

The `profile` list is illustrative, not a surveyed GPS track — just the named waypoints (trailhead, camps, summit) and their elevation, in order. That's enough to draw the route profile chart.

## Add a blog post

Create a new file in `src/content/blog/`:

```md
---
title: "Post Title"
date: 2026-07-01
tags: ["training", "gear"]
heroImage: "/images/blog/your-photo.jpg"
excerpt: "One sentence teaser shown on the blog list page."
---

Write your post here.
```

### Telling a summit's story

For a post that narrates a specific climb, add these optional fields — they render as a "Trip Info" box right after the tags, before your narrative:

```md
---
title: "Post Title"
date: 2026-07-01
tags: ["training", "gear"]
heroImage: "/images/blog/your-photo.jpg"
excerpt: "One sentence teaser shown on the blog list page."
mountain: "Mountain Name"
howToGetThere: "A short paragraph — trailhead, nearest town/airport, permit office, whatever's relevant."
whatToBring:
  - "Item one"
  - "Item two"
costBreakdown:
  - item: "Permit"
    cost: "$50"
  - item: "Guide fee"
    cost: "$800"
---

From here on, tell the actual story of the climb.
```

Skip `howToGetThere`/`whatToBring`/`costBreakdown` entirely for a post that isn't about a specific trip (reflections, training logs, etc.) — the box only appears when at least one of them is filled in.

## Add a gear review

Create a new file in `src/content/gear/`:

```md
---
item: "Product Name"
brand: "Brand Name"
category: "Footwear"        # e.g. Footwear, Shelter, Layers, Safety
rating: 5                   # 1–5
priceRange: "$200 – $250"   # optional
pros:
  - "First pro"
  - "Second pro"
cons:
  - "First con"
image: "/images/gear/your-photo.jpg"
elevationTags: ["10,000 - 14,000 ft"]
---

Write the full review here.
```

This appears on **/gear**. It does **not** automatically appear on the **/gear/guide** buying-guide page — that page is hand-curated. To change it, edit `src/data/gearByElevation.ts` directly (it's a plain list of tiers and items).

## Publishing your changes

Every time you commit a change through GitHub's web editor (or push from your computer), the **Actions** tab will show a "Deploy to GitHub Pages" run. Once it finishes (usually under a minute), your live site is updated. If it fails, click into the run — it will point at exactly which file has a formatting problem (usually a missing quote or misaligned indentation in the frontmatter).

## Hiding something without deleting it

Add `draft: true` to any climb, blog post, or gear review's frontmatter and it will stop showing up anywhere on the site, without you having to delete the file.
