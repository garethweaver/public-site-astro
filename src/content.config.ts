import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const haikusCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/haikus" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    slug: z.string().optional(),
    url: z.string(),
    order: z.number(),
    thumb: z.object({
      url: z.string(),
      gradient: z.number().optional(),
    }),
    title: z.string(),
    external: z.boolean(),
    type: z.string().optional(),
    year: z.union([z.number(), z.string()]).optional(),
    tools: z.string().optional(),
    repository: z.string().optional(),
    images: z
      .array(
        z.object({
          url: z.string(),
          alt: z.string(),
          height: z.number(),
          width: z.number(),
          mobile: z
            .object({
              url: z.string().optional(),
              name: z.string().optional(),
              height: z.number().optional(),
              width: z.number().optional(),
            })
            .optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  haikus: haikusCollection,
  portfolio: portfolioCollection,
};
