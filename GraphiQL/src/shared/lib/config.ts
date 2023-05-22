// import { z } from 'zod';
// УБРАТЬ В САМОМ КОНЦЕ ЕСЛТИ НЕ ПРИГОДИТСЯ
/* ВОЗМОЖНО ПОНАДОБИТСЯ
const envVariables = z.object({
  VITE_API_ENDPOINT: z.string().url(),
  VITE_API_DELAY: z.string().regex(/^\d+$/, { message: 'Must be a positive number' }).optional(),
  VITE_API_USER_EMAIL: z.string().min(1).email(),
  VITE_API_USER_PASSWORD: z.string().min(6),
  VITE_JWT_SECRET: z.string().min(1),
});

envVariables.parse(import.meta.env);

 declare global {
  type ImportMetaEnv = z.infer<typeof envVariables>;
} 

export const config = {
  API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
  API_DELAY: Number(import.meta.env.VITE_API_DELAY) || 100,
  API_USER_EMAIL: import.meta.env.VITE_API_USER_EMAIL,
  API_USER_PASSWORD: import.meta.env.VITE_API_USER_PASSWORD,
  JWT_SECRET: import.meta.env.VITE_JWT_SECRET,
} as const;
*/
