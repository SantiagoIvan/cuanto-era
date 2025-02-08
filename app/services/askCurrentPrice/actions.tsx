'use server'
import {AskCurrentPrice, parseDateToString, parseDolarString} from "@/lib/utils";
import {addDays, INTERVALO_DE_DIAS} from "@/lib/utils";
import moment from 'moment';


export async function getCurrentPrice (values: AskCurrentPrice): Promise<number> {

    const baseDate = new Date(parseDateToString(values.oldDate))
    const to = addDays(baseDate, INTERVALO_DE_DIAS)
    const from = addDays(baseDate, -INTERVALO_DE_DIAS)
    
    const toString = moment(to).format('DD-MM-YYYY')
    const fromString = moment(from).format('DD-MM-YYYY');
    

    const result = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${fromString}/${toString}`);

    const data = await result.json();
    const promediosDiarios = data.slice(1).map((element: string[]) => ((parseDolarString(element[1]) + parseDolarString(element[2])) / 2));
    console.log(promediosDiarios);

    const valorPrommedioDolar = promediosDiarios.reduce((partialSum: number, a: number) => partialSum + a, 0) / promediosDiarios.length;

    /*
    precio viejo / dolar = cuantos doalres costo esa verga
    obtener dolar actual
    dolares de esa verga * precio dolar actual
     */

    return valorPrommedioDolar;
}