import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {z} from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const askCurrentPriceSchema = z.object({
  oldPrice: z.string(),
  oldDate: z.string(),
})

export type AskCurrentPrice = z.infer<typeof askCurrentPriceSchema>