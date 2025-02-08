'use server'
import { AskCurrentPrice } from "@/lib/utils";


export async function getCurrentPrice (values: AskCurrentPrice): Promise<number> {
    const result = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/03-03-2021/03-03-2021`);
    const dateOne = new Date(`03-03-2021`);
    console.log(dateOne)
    dateOne.setDate(dateOne.getDate() + 5);
    console.log(dateOne)
    //15-05-1995
    //10-05-1995
    //05-05-1995
    console.log("Calculando precio actual...");
    console.log(values);
    return 4;
}