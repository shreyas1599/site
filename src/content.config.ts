// 1. Import utilities from `astro:content`
import { glob } from "astro/loaders"; // Not available with legacy API
import { defineCollection, z } from "astro:content";

const personal = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/personal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    tableOfContents: z.optional(z.array(z.string())),
    readingTime: z.number(),
  }),
});
const technical = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/technical" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    tableOfContents: z.optional(z.array(z.string())),
    readingTime: z.number(),
  }),
});

export const collections = { personal, technical };
