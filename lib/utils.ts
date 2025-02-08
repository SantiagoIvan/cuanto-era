import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {z} from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const INTERVALO_DE_DIAS = 5

export const askCurrentPriceSchema = z.object({
  oldPrice: z.string(),
  oldDate: z.string(),
})

export type AskCurrentPrice = z.infer<typeof askCurrentPriceSchema>

export function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function parseDateToString(dateString: string) {
  return dateString.split("-").reverse().join("-");
}

export function parseDolarString (value: string): number {
  return parseFloat(value.replace(",", "."))
}