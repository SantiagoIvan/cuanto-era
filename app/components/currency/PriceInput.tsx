import { Control } from "react-hook-form";
import { AskCurrentPrice } from "@/app/models/currency.model";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PriceInputProps {
  control: Control<AskCurrentPrice>;
}

export function PriceInput({ control }: PriceInputProps) {
  return (
    <FormField
      control={control}
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
  );
} 