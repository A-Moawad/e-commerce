import { useState, useEffect } from "react";

import {Link as RouterLink, useSearchParams} from "react-router-dom";
import {Link as ChakraLink} from "@chakra-ui/react";
import {
  Image,
  Box,
  Flex,
  Text,
  Heading,
  LinkOverlay,
  LinkBox,
  Select,
  Progress,
  Center
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

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

const fetchProducts = (sortType: string, categories: string): Promise<Product[]> => {
  let url = "https://fakestoreapi.com/products";
  if (sortType) {
    url += `?sort=${sortType}`;
  }

  else if (categories) {
    url += "categories";
  }

  // if (limit) {
  //   url += '?limit=' + limit;
  // }
  return fetch(url)
    .then((res) => res.json());
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sort_type") || "");
  const [category, setCategory] = useState(searchParams.get("categories") || "");
  
  const { isLoading, error, data } = useQuery<Product[]>({
    queryKey: ['repoData', sortBy, category], // Include category in queryKey
    queryFn: () => fetchProducts(sortBy, category[0]), // Pass category[0]
  });

  useEffect(() => {
    console.log(data);
    setSearchParams({
      ...searchParams,
      ...(sortBy ? { sort_type: sortBy } : {}),
      ...(category ? { categories: category } : {}),
    });
  }, [sortBy, category, setSearchParams]);



  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    setSearchParams({ sort_type: value });
  };

  if (isLoading) return <Progress size='xs' isIndeterminate />;
  if (error instanceof Error) return <Text>Error: {error.message}</Text>;
  if (!data || data.length === 0) return <Text>No products found.</Text>;
  if(category)
    return <div>catgories found</div>
  return (
    <>
      <Select mt={1} onChange={handleSortChange} value={sortBy}>
        <option value="">Default</option>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </Select>
      <Flex flexWrap="wrap" justifyContent="center" pt="50px">
        {data.map((product) => (
          <LinkBox
            as={RouterLink}
            to={`/products/${product.id}`}
            key={product.id}
            width={{ base: "90%", sm: "45%", md: "30%", lg: "20%" }}
            m="20px"
            p="10px"
            boxShadow="lg"
            borderRadius="md"
            overflow="hidden"
            textAlign="center"
            _hover={{ textDecoration: 'none', cursor: "pointer" }}
            _focus={{ outline: 'none' }}
          >
            <ChakraLink 
              as={RouterLink} 
              to={`/products/${product.id}`}
              _hover={{ textDecoration: 'none', color: 'inherit', cursor: "pointer" }}
              _focus={{ outline: 'none' }}
            >
              <Center>
                <Image
                  src={product.image}
                  alt={product.title}
                  width="200px"
                  height="200px"
                  borderRadius="md"
                  mb={4}
                />
              </Center>
              <Heading fontSize="lg" fontWeight="bold" mb={2}>
                <LinkOverlay as={RouterLink} to={`/products/${product.id}`}>
                  {product.title}
                </LinkOverlay>
              </Heading>
              <Text fontSize="sm" noOfLines={3}>
                {product.description}
              </Text>
              <Text fontSize="sm" mt={2}>
                Category: {product.category}
              </Text>
              <Text fontSize="sm">Price: ${product.price}</Text>
            </ChakraLink>
          </LinkBox>
        ))}
      </Flex>
    </>
  );
};

export default Products;
