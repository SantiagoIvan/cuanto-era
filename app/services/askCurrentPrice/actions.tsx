'use server'
import {AskCurrentPrice, parseDateToString} from "@/lib/utils";
import {addDays, INTERVALO_DE_DIAS} from "@/lib/utils";


export async function getCurrentPrice (values: AskCurrentPrice): Promise<number> {

    const baseDate = new Date(parseDateToString(values.oldDate))
    const to = addDays(baseDate, INTERVALO_DE_DIAS)
    const from = addDays(baseDate, -INTERVALO_DE_DIAS)



    const result = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${}/${}`);
    console.log("Calculando precio actual...");
    return 4;
}