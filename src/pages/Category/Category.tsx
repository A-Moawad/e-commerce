import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Cart from './Cart';

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const fetchProducts = async (categoryName: string): Promise<Product[]> => {
  try {
    const { data } = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${categoryName}`);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts(categoryName);
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, [categoryName]);

  if (!products) {
    return <div>{errorMessage || 'Loading...'}</div>;
  }
  return (
    <Flex flexWrap="wrap" justifyContent="center" pt="50px">
        {products.map((product) => (
          <Cart product={product}/>
        ))}
      </Flex>
  );
}

export default Category;
