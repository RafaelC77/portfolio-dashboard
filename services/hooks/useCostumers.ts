import { useQuery } from "react-query";
import { api } from "../api";

type Costumer = {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: string;
};

export async function getCostumers(): Promise<Costumer[]> {
  const { data } = await api.get("costumers");

  const costumers = data.costumers.map((costumer: any) => {
    return {
      id: costumer.id,
      name: costumer.name,
      email: costumer.email,
      date: new Date(costumer.purchaseDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      amount: costumer.purchaseAmount,
    };
  });

  return costumers;
}

export function useCostumers() {
  return useQuery("costumers", getCostumers, {
    staleTime: 1000 * 10, // 10 seconds
  });
}
