import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, List, Spinner, Center, Select } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

type Cart = {
  date: string;
  id: number;
  products: {
    productId: number;
    quantity: number;
  }[];
  userId: number;
};

const fetchCarts = async (sortType: string): Promise<Cart[]> => {
  let url = 'https://fakestoreapi.com/carts';
  if (sortType) {
    url += `?sort=${sortType}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function Carts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get('sort_type') || '');
  const navigate = useNavigate();

  const { isLoading, error, data: carts } = useQuery<Cart[]>({
    queryKey: ['carts', sortBy],
    queryFn: () => fetchCarts(sortBy),
  });

  useEffect(() => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()), // Preserve other search params
      ...(sortBy ? { sort_type: sortBy } : {}),
    });
  }, [sortBy, setSearchParams]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    setSearchParams({ sort_type: value });
  };

  const handleCartClick = (id: number) => {
    navigate(`/carts/${id}`);
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="lg" mb={5}>
        Carts
      </Heading>
      <Select placeholder="Sort by" onChange={handleSortChange} mb={5} value={sortBy}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
      {isLoading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Center>
          <Text color="red.500">Error fetching carts: {error.message}</Text>
        </Center>
      ) : (
        <List spacing={5}>
          {carts?.map((cart) => (
            <Box
              key={cart.id}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              cursor="pointer"
              onClick={() => handleCartClick(cart.id)}
            >
              <Text fontSize="md" fontWeight="bold">
                Cart ID: {cart.id}
              </Text>
              <Text fontSize="md">User ID: {cart.userId}</Text>
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
}

export default Carts;
