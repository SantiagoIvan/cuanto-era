"use client";
import { useState } from "react";
import { CurrencyCard } from "@/app/components/currency/CurrencyCard";

export default function Home() {
  const [currentPrice, setCurrentPrice] = useState("");

  return (
    <div className="flex justify-center items-center h-full">
      <CurrencyCard 
        currentPrice={currentPrice} 
        setCurrentPrice={setCurrentPrice} 
      />
    </div>
  );
}
