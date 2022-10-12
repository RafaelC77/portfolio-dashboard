import { useQuery } from "react-query";
import { setupAPI } from "../api";

type Product = {
  id: string;
  name: string;
  stock: number;
  images: string[];
  price: string;
};

type GetProductsResponse = {
  products: Product[];
  totalCount: number;
};

export async function getProducts(
  page: number,
  query?: string
): Promise<GetProductsResponse> {
  const api = setupAPI();

  const requestURL = !!query ? "auth/products/search" : "auth/products";

  const response = await api.get(requestURL, {
    params: {
      limit: 6,
      skip: (page - 1) * 6,
      q: query,
    },
  });

  console.log(response.request.responseURL);

  const data = response?.data;

  const totalCount = data?.total;

  const products = data?.products.map((product) => {
    return {
      id: product.id,
      name: product.title,
      stock: product.stock,
      images: product.images,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price),
    };
  });

  return { products, totalCount };
}

export function useProducts(page: number, query: string) {
  return useQuery(["products", page, query], () => getProducts(page, query), {
    staleTime: 1000 * 10, // 10 seconds
  });
}
