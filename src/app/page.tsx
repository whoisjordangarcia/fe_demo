"use client";

import { useState, useEffect } from "react";
import { Product } from "./_components/product";
import {
  ProductsResponse,
  fetchProducts,
  searchProducts,
} from "./api/productsApi";
import { Search } from "./_components/search";
import { Sort } from "./_components/sort";
import Footer from "./_components/footer";
import { calculateProductPriceAverage } from "./utils/pricing";
import { sortProductsByPrice } from "./utils/sort";

const DEFAULT_SORT_DIRECTION = "asc";

export default function ProductsPage() {
  const [productResponse, setProductResponse] = useState<ProductsResponse>();
  const [sortDirection, setSortDirection] = useState(DEFAULT_SORT_DIRECTION);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const onload = async () => {
      const productResponse = await fetchProducts();
      setProductResponse(productResponse);
    };

    onload();
  }, []);

  useEffect(() => {
    const search = async () => {
      const productResponse =
        query.length > 0 ? await searchProducts(query) : await fetchProducts();
      setSortDirection(DEFAULT_SORT_DIRECTION);
      setProductResponse(productResponse);
    };

    search();
  }, [query]);

  useEffect(() => {
    // TODO: API does not support sorting in search page as a solution
    // we'll sort the prices on the client side
    const sort = async () => {
      const products = productResponse?.products;
      if (products !== undefined && products.length > 0) {
        const sortedProducts = sortProductsByPrice(products, sortDirection);
        if (productResponse !== undefined) {
          setProductResponse({ ...productResponse, products: sortedProducts });
        }
      }
    };

    sort();
  }, [sortDirection]);

  return (
    <main className="bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full items-center gap-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-900 md:ml-auto md:gap-2 lg:gap-4">
        <h2 className="py-4 text-3xl font-semibold">Products</h2>
        <div className="flex flex-row">
          <div className="basis-1/4">
            <Search
              onChange={(query) => {
                setQuery(query);
              }}
            />
          </div>
          <div className="basis-1/2">
            <Sort
              sortDirection={sortDirection}
              onClick={() => {
                setSortDirection(sortDirection === "asc" ? "desc" : "asc");
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid  gap-8   md:p-6">
        {productResponse && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productResponse?.products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  thumbnail={product.thumbnail}
                />
              ))}
            </div>
            <div className="self-center">
              <Footer
                total={productResponse?.total}
                averagePrice={calculateProductPriceAverage(
                  productResponse.products,
                )}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
