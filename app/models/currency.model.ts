import { z } from "zod";
import { DateService } from "../services/date/date.service";


export const askCurrentPriceSchema = z.object({
  oldPrice: z.string().refine(
    (price) => {
      const numPrice = parseFloat(price.replace(',', '.'));
      return !isNaN(numPrice) && numPrice > 0;
    },
    {
      message: "El precio debe ser un número positivo"
    }
  ),
  oldDate: z.string().refine(
    (date) => {
      return DateService.validateDate(date);
    },
    {
      message: "La fecha debe ser posterior al 01-01-2003 y tener el formato DD-MM-YYYY"
    }
  ),
})


export type AskCurrentPrice = z.infer<typeof askCurrentPriceSchema> 