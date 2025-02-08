"use client";
import { useState } from "react";
import { getCurrentPrice } from "@/app/services/askCurrentPrice/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AskCurrentPrice, askCurrentPriceSchema } from "@/lib/utils";

export default function Home() {
  const [currentPrice, setCurrentPrice] = useState("");

  const form = useForm<AskCurrentPrice>({
    mode: "onBlur",
    resolver: zodResolver(askCurrentPriceSchema),
    defaultValues: {
      oldPrice: "",
      oldDate: "",
    },
  });

  const onSubmit = async () => {
    console.log("Calculando precio actual...");
    const formValues = form.getValues();
    console.log(formValues);
    const result = await getCurrentPrice(formValues);
    console.log(result);
    setCurrentPrice(result);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center pb-4 text-4xl">Cuanto era</CardTitle>
          <CardDescription>
            cuantos crocantes representaban mis pesitos antes?
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                    <FormDescription>Ejemplo: 31-05-2005</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-xl p-4">Consultar</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
        <span className="text-xl"> {currentPrice} </span>
        </CardFooter>
      </Card>
    </div>
  );
}
