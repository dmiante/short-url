import { z } from "zod";

export const formSchema = z.object({
  url: z.string().url({ message: 'Invalid url' })
})