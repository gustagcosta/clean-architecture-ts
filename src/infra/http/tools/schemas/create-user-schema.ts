import { z } from 'zod';
import { emailSchema, passwordSchema } from './shared-definitions';

export const createUserSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3).max(255),
  email: emailSchema,
  password: passwordSchema,
});
