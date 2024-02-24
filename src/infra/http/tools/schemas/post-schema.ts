import { z } from 'zod';

export const postSchema = z.object({
  user_id: z.number().positive(),
  title: z.string().min(10).max(128),
  content: z.string().min(25).max(255),
});
