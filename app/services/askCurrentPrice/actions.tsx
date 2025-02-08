'use server'
import {AskCurrentPrice, parseDateToString, parseDolarString} from "@/lib/utils";
import {addDays, INTERVALO_DE_DIAS} from "@/lib/utils";
import moment from 'moment';


async function getDolar(from: string,to: string) {
    const result = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${from}/${to}`);

    const data = await result.json();
    const promediosDiarios = data.slice(1).map((element: string[]) => ((parseDolarString(element[1]) + parseDolarString(element[2])) / 2));
    

    return promediosDiarios.reduce((partialSum: number, a: number) => partialSum + a, 0) / promediosDiarios.length;
    }

export async function getCurrentPrice (values: AskCurrentPrice): Promise<string> {

    const baseDate = new Date(parseDateToString(values.oldDate))
    const to = addDays(baseDate, INTERVALO_DE_DIAS)
    const from = addDays(baseDate, -INTERVALO_DE_DIAS)
    
    const toString = moment(to).format('DD-MM-YYYY')
    const fromString = moment(from).format('DD-MM-YYYY');

    const currentDate = moment().format('DD-MM-YYYY');
    const prevDate = moment().subtract(5, 'days').format('DD-MM-YYYY');
    

    const oldDolarValue = await getDolar(fromString, toString);
    const newDolarValue = await getDolar(prevDate, currentDate);
    
    return ((Number(values.oldPrice) / oldDolarValue ) * newDolarValue).toFixed(2);
    

}