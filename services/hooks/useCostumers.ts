import { useQuery } from "react-query";
import { api } from "../api";

type Costumer = {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: string;
};

type GetCostumersResponse = {
  costumers: Costumer[];
  totalCount: number;
};

export async function getCostumers(
  page: number
): Promise<GetCostumersResponse> {
  const { data, headers } = await api.get("costumers", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

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

  return { costumers, totalCount };
}

export function useCostumers(page: number) {
  return useQuery(["costumers", page], () => getCostumers(page), {
    staleTime: 1000 * 10, // 10 seconds
  });
}
