import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Heading, Text, List, Spinner, Center, Flex } from '@chakra-ui/react';
import OneProduct from './OneProduct';

type Cart = {
  date: string;
  id: number;
  products: {
    productId: number;
    quantity: number;
  }[];
  userId: number;
};

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

const fetchCart = async (cartId: string): Promise<Cart> => {
  try {
    const { data } = await axios.get<Cart>(`https://fakestoreapi.com/carts/${cartId}`);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching cart: ${error.message}`);
  }
};

const fetchProduct = async (productId: number): Promise<Product> => {
  try {
    const { data } = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching product: ${error.message}`);
  }
};

function Cart() {
  const { cartId } = useParams<{ cartId: string }>();
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Map<number, Product>>(new Map());

  useEffect(() => {
    const loadCart = async () => {
      try {
        const fetchedCart = await fetchCart(cartId!);
        setCart(fetchedCart);
        const productDetails = await Promise.all(
          fetchedCart.products.map(async (item) => {
            const product = await fetchProduct(item.productId);
            return { productId: item.productId, product };
          })
        );
        const productMap = new Map(productDetails.map(({ productId, product }) => [productId, product]));
        setProducts(productMap);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (cartId) {
      loadCart();
    }
  }, [cartId]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center height="100vh">
        <Text color="red.500">Error: {error}</Text>
      </Center>
    );
  }

  if (!cart) {
    return (
      <Center height="100vh">
        <Text>No cart found.</Text>
      </Center>
    );
  }

  return (
    <Box p={5}>
      <Heading as="h1" size="lg" mb={5}>
        Cart Details
      </Heading>
      <Text fontSize="md" fontWeight="bold">Cart ID: {cart.id}</Text>
      <Text fontSize="md">Date: {new Date(cart.date).toLocaleDateString()}</Text>
      <Text fontSize="md" mb={5}>User ID: {cart.userId}</Text>
      <Heading as="h2" size="md" mb={3}>Products</Heading>
      <Flex flexWrap="wrap" justifyContent="center" pt="20px">
        {cart.products.map((product) => {
          const productData = products.get(product.productId);
          return productData ? (
            <OneProduct
              key={product.productId}
              product={productData}
              quantity={product.quantity}
            />
          ) : (
            <Text key={product.productId}>Loading product details...</Text>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Cart;
