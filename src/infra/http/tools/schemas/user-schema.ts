import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255),
});