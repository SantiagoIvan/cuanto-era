'use server'
import {AskCurrentPrice, parseDateToString} from "@/lib/utils";
import {addDays, INTERVALO_DE_DIAS} from "@/lib/utils";
import moment from 'moment';


export async function getCurrentPrice (values: AskCurrentPrice): Promise<number> {

    const baseDate = new Date(parseDateToString(values.oldDate))
    const to = addDays(baseDate, INTERVALO_DE_DIAS)
    const from = addDays(baseDate, -INTERVALO_DE_DIAS)
    
    const toString = moment(to).format('DD-MM-YYYY')
    const fromString = moment(from).format('DD-MM-YYYY');
    

    const result = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${fromString}/${toString}`);
    console.log(`https://mercados.ambito.com//dolar/informal/historico-general/${fromString}/${toString}`);
    const data = await result.json();
    const dataSlice = data.slice(1).map((element: string[]) => (parseFloat(element[1]) + parseFloat(element[2]) / 2 ) );
    console.log(dataSlice)
    return 4;
}