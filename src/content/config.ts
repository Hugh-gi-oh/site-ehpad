// src/content/config.ts
import { defineCollection, z } from "astro:content";

export const collections = {
  sections: defineCollection({
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      order: z.number().optional().default(0),
      id: z.string().optional(),
    }),
  }),

  tarifs: defineCollection({
    schema: z.object({
      title: z.string(),
      price: z.string().optional(),
      description: z.string().optional(),
      order: z.number().optional().default(0),
    }),
  }),

  infos: defineCollection({
    schema: z.object({
      name: z.string().optional(),
      address: z.string().optional(),
      postalCode: z.string().optional(),
      city: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
      fax: z.string().optional(),
      visit_note: z.string().optional(),
      response_time: z.string().optional(),
    }),
  }),
};

export default collections;
