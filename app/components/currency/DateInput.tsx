import { Control } from "react-hook-form";
import { AskCurrentPrice } from "@/app/models/currency.model";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface DateInputProps {
  control: Control<AskCurrentPrice>;
}

export function DateInput({ control }: DateInputProps) {
  return (
    <FormField
      control={control}
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
  );
} 