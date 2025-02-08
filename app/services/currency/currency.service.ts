import { formatStringPriceToUSFormat } from "@/lib/utils";
import { DateService } from "../date/date.service";


/**
 * Parsea la respuesta de la API para obtener el promedio de los valores.
 * @param {any} response - Respuesta de la API.
 * @returns {number[]} Array de números.
 */
export const parseResponse = (response: any): number[] => {
  return response.slice(1).map((element: string[]) => 
    ((formatStringPriceToUSFormat(element[1]) + formatStringPriceToUSFormat(element[2])) / 2)
  );
}

/**
 * Calcula el promedio de un array de números.
 * @param {number[]} array - Array de números.
 * @returns {number} Promedio de los números en el array.
 */
export const getAverage = (array: number[]): number => {
  return array.reduce((partialSum: number, a: number) => 
    partialSum + a, 0) / array.length;
}


export const CurrencyService = {

  /**
   * Obtiene el promedio del dólar informal hoy.
   * @returns {Promise<number>} Promedio del dólar informal hoy.
   */
  getCurrentDollarExchangeRate: async (): Promise<number> => {

    const currentDate = DateService.getCurrentDate();
    const { from } = DateService.getRangeOfDays(currentDate);
    const response = await (await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${from}/${currentDate}`)).json();
    const dailyAverage = parseResponse(response);
    
    return getAverage(dailyAverage);
  },


  /**
   * Obtiene el promedio del dólar informal en una fecha específica.
   * @param {string} date - Fecha en formato DD-MM-YYYY.
   * @returns {Promise<number>} Promedio del dólar informal en la fecha especificada del pasado.
   */
  getPastDollarExchangeRate: async (date: string): Promise<number> => {
    const { from, to } = DateService.getRangeOfDays(date);
    const response = await (await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${from}/${to}`)).json();
    const dailyAverage = parseResponse(response)

    return getAverage(dailyAverage)
  }
} 