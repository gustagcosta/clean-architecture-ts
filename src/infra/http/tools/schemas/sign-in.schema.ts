import { z } from 'zod';
import { emailSchema, passwordSchema } from './shared-definitions';

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
