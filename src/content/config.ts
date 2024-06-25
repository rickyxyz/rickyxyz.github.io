import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const project = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    carouselImages: z.array(z.string()),
    sizeCover: z.optional(z.boolean()),
    githubLink: z.string(),
    liveLink: z.string(),
  }),
});

export const collections = { blog, project };
