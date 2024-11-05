import zod from 'zod';

export const userInputSchema = zod.object({
    password: zod.string(),
    email: zod.string().email(),
});