import { useQuery } from "react-query";
import { api } from "../api";

type Customer = {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: string;
};

type GetCustomersResponse = {
  customers: Customer[];
  totalCount: number;
};

export async function getCustomers(
  page: number
): Promise<GetCustomersResponse> {
  const { data } = await api.get("users", {
    params: {
      limit: 10,
      skip: (page - 1) * 10,
    },
  });

  console.log(data);

  const totalCount = data.total;

  const customers = data.users.map((user: any) => {
    const purchaseAmount = Number(Math.random() * 100);

    return {
      id: user.id,
      name: user.username,
      email: user.email,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      amount: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(purchaseAmount),
    };
  });

  return { customers, totalCount };
}

export function useCustomers(page: number) {
  return useQuery(["customers", page], () => getCustomers(page), {
    staleTime: 1000 * 10, // 10 seconds
  });
}
