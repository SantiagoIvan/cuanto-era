import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convierte un número con coma a punto y lo devuelve como número.
 * @param {string} value - Precio en formato argentino.
 * @returns {number} Precio en formato US como número.
 */
export function formatStringPriceToUSFormat (value: string): number {
  return parseFloat(value.replace(",", "."))
}

