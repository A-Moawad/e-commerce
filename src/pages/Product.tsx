import { Center, Box, Image, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

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

const fetchProduct = async (userId: string): Promise<Product> => {
  try {
    const { data } = await axios.get<Product>(`https://fakestoreapi.com/products/${userId}`);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching product: ${error.message}`);
  }
};

const Product = () => {
  const { userId } = useParams<{ userId: any }>();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct = await fetchProduct(userId);
        setProduct(fetchedProduct);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, [userId]);

  if (!product) {
    return <div>{errorMessage || 'Loading...'}</div>;
  }

  return (
    <>
      <Center>
        <Box
          textAlign="center"
          width={{ base: "90%", sm: "45%", md: "30%", lg: "20%" }}
          m="20px"
          p="10px"
          boxShadow="lg"
          borderRadius="md"
          overflow="hidden"
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width="auto"
            height="auto"
            borderRadius="md"
            mb={4}
          />
          <Heading fontSize="lg" fontWeight="bold" mb={2}>
            {product.title}
          </Heading>
          <Text fontSize="sm" noOfLines={3} mb={2}>
            {product.description}
          </Text>
          <Text fontSize="sm" mb={1}>
            Category: {product.category}
          </Text>
          <Text fontSize="sm">Price: ${product.price}</Text>
        </Box>
      </Center>
    </>
  );
};

export default Product;
