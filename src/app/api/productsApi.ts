export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const PRODUCTS_DOMAIN = "https://dummyjson.com";

export const searchProducts = async (
  query: string | undefined,
): Promise<ProductsResponse> => {
  console.log(`Searching products with: ${query}`);

  const response = await fetch(`${PRODUCTS_DOMAIN}/products/search?q=${query}`);

  if (response.status != 200) {
    throw Error("Error finding products");
  }

  const data = await response.json();

  console.log(`Found ${data.products.length} products`);

  return data;
};

export const fetchProducts = async (): Promise<ProductsResponse> => {
  console.log("Fetching products");

  const response = await fetch(`${PRODUCTS_DOMAIN}/products`);

  if (response.status != 200) {
    throw Error("Error fetching products");
  }

  const data = await response.json();

  console.log(`Loading ${data.products.length}`);

  return data;
};
