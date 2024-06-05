import { Product } from "../api/productsApi";

export const sortProductsByPrice = (
  products: Product[],
  sortDirection: string,
) => {
  return products.sort((a, b) => {
    if (sortDirection === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
};
