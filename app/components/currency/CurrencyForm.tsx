import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AskCurrentPrice, askCurrentPriceSchema } from "@/app/models/currency.model";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PriceInput } from "./PriceInput";
import { DateInput } from "./DateInput";
import { getCurrentDollarExchangeRate } from "@/app/services/actions";

interface CurrencyFormProps {
  onSubmitSuccess: (result: string) => void;
}

export function CurrencyForm({ onSubmitSuccess }: CurrencyFormProps) {
  const form = useForm<AskCurrentPrice>({
    mode: "onBlur",
    resolver: zodResolver(askCurrentPriceSchema),
    defaultValues: {
      oldPrice: "",
      oldDate: "",
    },
  });

  const onSubmit = async () => {
    const formValues = form.getValues();
    const result = await getCurrentDollarExchangeRate(formValues);
    onSubmitSuccess(result);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <PriceInput control={form.control} />
        <DateInput control={form.control} />
        <Button type="submit" className="w-full text-xl p-4">
          Consultar
        </Button>
      </form>
    </Form>
  );
} 