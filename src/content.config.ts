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
    region: z.string(),
    status: z.enum(['completed', 'planned']),
    date: z.coerce.date(),
    difficulty: z.string().optional(),
    route: z.string().optional(),
    coordinates: z.tuple([z.number(), z.number()]).optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
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
