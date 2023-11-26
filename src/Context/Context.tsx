import React, { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../components/FakeStoreComponent";

interface ProductsContextProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  setProducts: (products: Product[]) => {},
});

export const useProductsContext = () => useContext(ProductsContext);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};

