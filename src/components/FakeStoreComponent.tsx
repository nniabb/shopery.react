import React, { useState, useEffect } from 'react';
import { Itemsbox, Itemsheading, Itemsprice, Imgside, Itemtextside, Div } from './styled/Fakestorestyled';
import { useProductsContext } from "../Context/Context";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}


const FakeStoreComponent: React.FC = () => {
  const {products, setProducts} = useProductsContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw Error('Network response was not ok');
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Div>
        {products.map((product) => (
          <Itemsbox>
            <Imgside>
             <img style={{height:'200px', width:'180px'}} src={product.image} alt={product.title} />
            </Imgside>
            <Itemtextside>
              <Itemsheading>{product.title}</Itemsheading>
              <Itemsprice>${product.price}</Itemsprice>
            </Itemtextside>
          </Itemsbox>
        ))}
    </Div>
  );
};

export default FakeStoreComponent;