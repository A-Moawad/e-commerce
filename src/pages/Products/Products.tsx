import { useState, useEffect } from "react";

import {useSearchParams} from "react-router-dom";
import {
 
  Flex,
  Text,
  Select,
  Progress,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Cart from "./Cart";

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

const fetchProducts = (sortType: string): Promise<Product[]> => {
  let url = "https://fakestoreapi.com/products";
  if (sortType) {
    url += `?sort=${sortType}`;
  }
  return fetch(url)
    .then((res) => res.json());
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sort_type") || "");
  
  const { isLoading, error, data } = useQuery<Product[]>({
    queryKey: ['repoData', sortBy], // Include category in queryKey
    queryFn: () => fetchProducts(sortBy), // Pass category[0]
  });

  useEffect(() => {
    console.log(data);
    setSearchParams({
      ...searchParams,
      ...(sortBy ? { sort_type: sortBy } : {}),
    });
  }, [sortBy, setSearchParams]);



  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    setSearchParams({ sort_type: value });
  };

  if (isLoading) return <Progress size='xs' isIndeterminate />;
  if (error instanceof Error) return <Text>Error: {error.message}</Text>;
  if (!data || data.length === 0) return <Text>No products found.</Text>;
  return (
    <>
      <Select mt={1} onChange={handleSortChange} value={sortBy}>
        <option value="">Default</option>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </Select>
      <Flex flexWrap="wrap" justifyContent="center" pt="50px">
        {data.map((product) => (
          <Cart product={product}/>
        ))}
      </Flex>
    </>
  );
};

export default Products;
