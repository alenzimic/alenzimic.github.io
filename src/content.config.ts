import { defineCollection, z } from "astro:content";

const portfolioSchema = z.object({
  title: z.string(),
  tabLabel: z.string().optional(),
  subtitle: z.string().optional(),
  date: z.string().optional(),
  status: z.string().optional(),
  href: z.string().url().optional(),
  repositoryHref: z.string().url().optional(),
  authors: z.string().optional(),
  journal: z.string().optional(),
  summary: z.string().optional(),
  dateWritten: z.string().optional(),
  readingTime: z.string().optional(),
  figureImage: z.string().optional(),
  figureAlt: z.string().optional(),
  figureCaption: z.string().optional(),
  figureSource: z.string().url().optional(),
  visual: z.string().optional(),
  venue: z.string().optional(),
  order: z.number().optional(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  about: defineCollection({ type: "content", schema: portfolioSchema }),
  affiliations: defineCollection({ type: "content", schema: portfolioSchema }),
  education: defineCollection({ type: "content", schema: portfolioSchema }),
  experience: defineCollection({ type: "content", schema: portfolioSchema }),
  "funding-awards": defineCollection({ type: "content", schema: portfolioSchema }),
  leadership: defineCollection({ type: "content", schema: portfolioSchema }),
  notes: defineCollection({ type: "content", schema: portfolioSchema }),
  projects: defineCollection({ type: "content", schema: portfolioSchema }),
  publications: defineCollection({ type: "content", schema: portfolioSchema }),
  talks: defineCollection({ type: "content", schema: portfolioSchema }),
};
