import { Box, Text, Flex, Image, Wrap, WrapItem, Progress } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  }
  images: string[];
};

// API fetch function separated from component
const fetchProducts = (): Promise<Product[]> => {
  return fetch('https://api.escuelajs.co/api/v1/products')
  .then((res) => res.json())
  .then((products) => products.map((product: any) => ({
    ...product,
    images: Array.isArray(product.images) ? product.images : [prduct.images]

  })));
};

const Home = () => {
  const { isLoading, error, data } = useQuery<Product[]>({
    queryKey: ['repoData'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Progress size='xs' isIndeterminate />;
  if (error instanceof Error) return <Text>Error: {error.message}</Text>;
  if (data?.length === 0) return <Text>No products found.</Text>;
  console.log(data);
  return (
    <Flex justify="center" align="center" mt={8}>
      <Wrap spacing="24px" justify="center">
        {data?.map(product => (
          <WrapItem key={product.id} height={400} width="200px" overflow="hidden">
            <Box boxShadow="lg" rounded="md" overflow="hidden">
              <Image src={product.images[0]} h={300} w="100%" objectFit="cover" />
              <Box p={4}>
                <Text fontSize="lg" fontWeight="bold">{product.category.name}</Text>
                <Text mt={2} fontSize="sm" color="gray.600">{product.description}</Text>
              </Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default Home;
