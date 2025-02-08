'use client'


import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const askCurrentPriceSchema = z.object({
    oldPrice: z.number().positive(),
    oldDate: z.string(),
})

export default function Home() {
    const form = useForm()

  const onSubmit = () => {
    console.log("Calculando precio actual...")
  }

  return (
    <div>
      <h1>Cuanto era</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
              control={form.control}
              name="oldPrice"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Precio viejo</FormLabel>
                    <FormControl>
                      <Input placeholder="2.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />
            <FormField
                control={form.control}
                name="oldDate"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Fecha vieja</FormLabel>
                        <FormControl>
                            <Input placeholder="dd-mm-yyyy" {...field} />
                        </FormControl>
                        <FormDescription>
                            Ejemplo: 31-05-2005
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
          <Button type="submit">Consultar</Button>
        </form>
      </Form>
        <form>
        </form>
    </div>
  );
}
