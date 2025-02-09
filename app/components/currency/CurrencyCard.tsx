import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CurrencyForm } from "./CurrencyForm";

interface CurrencyCardProps {
  currentPrice: string;
  setCurrentPrice: (price: string) => void;
}

export function CurrencyCard({ currentPrice, setCurrentPrice }: CurrencyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center pb-4 text-4xl">
          Cuanto era
        </CardTitle>
        <CardDescription>
          cuantos crocantes representaban mis pesitos antes?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CurrencyForm onSubmitSuccess={setCurrentPrice} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <span className="text-xl"> {currentPrice} </span>
      </CardFooter>
    </Card>
  );
} 