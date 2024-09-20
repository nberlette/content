import { z } from 'zod'
import { defineCollection } from '@farnabaz/content-next'

const content = defineCollection({
  type: 'page',
  source: {
    driver: 'fs',
    base: '**',
    ignore: [
      'data/**',
      'pages/**',
      'nuxt-content/**',
    ],
  },
})

const data = defineCollection({
  type: 'page',
  source: 'data/**',
  schema: z.object({
    path: z.string(),
    company: z.string(),
    domain: z.array(z.string()),
    tutorial: z.array(
      z.record(
        z.object({
          name: z.string(),
          type: z.string(),
          born: z.number(),
        }),
      ),
    ),
    author: z.string(),
    published: z.boolean(),
  }),
})

const pages = defineCollection({
  type: 'page',
  source: 'pages/**',
})

const nuxt_content = defineCollection({
  type: 'page',
  source: {
    driver: 'fs',
    base: 'nuxt-content/**',
    prefix: '/nuxt-content',
  },
})

export const collections = {
  content,
  data,
  pages,
  nuxt_content,
  foo: defineCollection({
    source: 'data/foo/bar.yml',
    type: 'data',
    schema: z.object({
      name: z.string(),
      type: z.string(),
      born: z.number(),
    }),
  }),
}
