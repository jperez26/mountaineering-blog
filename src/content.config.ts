import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A single "climb" is either a completed summit or a planned trip,
// distinguished by `status`. This powers /summits, /planned, /timeline,
// and /map from one source of truth.
const climbs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/climbs' }),
  schema: z.object({
    title: z.string(),
    mountain: z.string(),
    elevationFt: z.number(),
    elevationM: z.number().optional(),
    elevationGainFt: z.number().optional(),
    region: z.string(),
    status: z.enum(['completed', 'planned']),
    // Omit entirely for a long-term/someday goal with no fixed date yet.
    date: z.coerce.date().optional(),
    difficulty: z.string().optional(),
    route: z.string().optional(),
    coordinates: z.tuple([z.number(), z.number()]).optional(),
    heroImage: z.string().optional(),
    // CSS object-position for heroImage, e.g. "50% 15%" — most photos crop
    // fine centered, but a few have the summit close enough to the frame
    // edge that a center-crop clips the tip in the small ClimbCard thumbnail.
    heroImagePosition: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    // Schematic route profile (trailhead -> summit), ordered start to finish.
    // Not to-scale GPS data — illustrative waypoints for the elevation chart.
    profile: z
      .array(
        z.object({
          label: z.string(),
          elevationFt: z.number(),
        })
      )
      .optional(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    excerpt: z.string(),
    // Optional "trip info" panel rendered before the narrative body —
    // fill these in for a summit story, skip them for a plain post.
    mountain: z.string().optional(),
    howToGetThere: z.string().optional(),
    whatToBring: z.array(z.string()).optional(),
    costBreakdown: z
      .array(
        z.object({
          item: z.string(),
          cost: z.string(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const gear = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gear' }),
  schema: z.object({
    item: z.string(),
    brand: z.string().optional(),
    category: z.string(),
    rating: z.number().min(1).max(5),
    priceRange: z.string().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    image: z.string().optional(),
    elevationTags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { climbs, blog, gear };
