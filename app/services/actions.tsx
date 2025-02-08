'use server'
import { AskCurrentPrice } from "@/app/models/currency.model";
import { CurrencyService } from "./currency/currency.service";


/**
 * Calcula cuántos pesos representan hoy tus pesos en el pasado.
 * 
 * @param values - Datos enviados por el usuario.
 *   @example
 *   {
 *     oldPrice: 100,    // Precio histórico en pesos
 *     oldDate: "31-12-2020"  // Fecha en formato DD-MM-YYYY
 *   }
 * @returns Cantidad de pesos que representan tus pesos del pasado hoy.
 * @example
 * 1000
 */

export async function getCurrentDollarExchangeRate (values: AskCurrentPrice): Promise<string> {
    const oldExchangeRate = await CurrencyService.getPastDollarExchangeRate(values.oldDate);
    const currentExchangeRate = await CurrencyService.getCurrentDollarExchangeRate();
    
    return ((Number(values.oldPrice) / oldExchangeRate ) * currentExchangeRate).toFixed(2);

}