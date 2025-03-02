// 1. Import utilities from `astro:content`
// @ts-ignore
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define collection
const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/collections/posts" }),
  schema: ({ image }) => z.object({
    categories: z.array(z.string()),
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('João Trindade'),
    authorAvatar: z.object({
      src: image(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  })
});

// 4. Export a single `collections` object to register the collection
export const collections = { posts };