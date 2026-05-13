import { defineCollection, z } from 'astro:content';

const weekly = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    vol: z.number(),
    title: z.string(),
    excerpt: z.string().optional(),
    book_quote: z.object({
      source: z.string().optional(),
      text: z.string().optional(),
    }).optional(),
    reading_time: z.string().default('4 MIN READ'),
  }),
});

const monthly = defineCollection({
  type: 'content',
  schema: z.object({
    issue_no: z.number(),
    date: z.coerce.date(),
    issue_month: z.string(),
    cover_title: z.string(),
    cover_deck: z.string(),
    piece_letter: z.object({
      title: z.string(),
      body: z.string(),
      book_quote: z.object({
        source: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
      signature: z.string().default('민정미, from Chungmuro'),
    }),
    piece_case: z.object({
      title: z.string(),
      body: z.string(),
      case_tag: z.string().optional(),
    }),
    piece_news: z.object({
      title: z.string(),
      body: z.string(),
      comment: z.string(),
    }),
    piece_voice: z.object({
      member: z.enum([
        'minjungmi', 'yuktaegyeom', 'josuyeon', 'choieunyoung',
        'choijongnam', 'hyunjinhyun', 'josuhyun', 'anggyeongsu',
      ]),
      quote: z.string(),
    }),
    next_issue_label: z.string().default('NEXT ISSUE'),
  }),
});

const therapists = defineCollection({
  type: 'data',
  schema: z.object({
    member_no: z.number().min(1).max(8),
    name: z.string(),
    name_en: z.string().optional(),
    caption: z.string().optional(),
    years: z.string().default('1 YEAR'),
    extra_role: z.string().optional(),
    photo: z.string().optional(),
    external_link: z.string().optional(),
    external_link_label: z.string().default('PROFILE ↗'),
    is_leader: z.boolean().default(false),
  }),
});

const press = defineCollection({
  type: 'content',
  schema: z.object({
    outlet: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    excerpt: z.string(),
    byline: z.string().optional(),
    url: z.string().url(),
  }),
});

export const collections = { weekly, monthly, therapists, press };
