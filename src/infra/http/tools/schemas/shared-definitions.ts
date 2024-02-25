import z, { type ZodType } from 'zod';

export const emailSchema: ZodType<string, any, any> = z.string().email();
export const passwordSchema: ZodType<string, any, any> = z.string().min(6).max(255);
