import { Product } from "~/app/api/productsApi";

export const calculateProductPriceAverage = (products: Product[]): number => {
  if (products.length == 0) {
    return 0;
  }

  const prices = products.map((product) => product.price);
  return average(prices);
};

const average = (items: number[]) =>
  items.reduce((a: number, b: number) => a + b / items.length);
