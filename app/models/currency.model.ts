import { z } from "zod";

export const askCurrentPriceSchema = z.object({
  oldPrice: z.string(),
  oldDate: z.string(),
})

export type AskCurrentPrice = z.infer<typeof askCurrentPriceSchema> 