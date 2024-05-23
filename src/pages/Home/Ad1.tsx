import { Box, Text, HStack, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Ad1() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/products/category${path}`);
  };

  return (
    <Box w="100%"
         p={5} borderRadius="5px" 
         textAlign="center"
         fontWeight="bold" 
         color="#fff" 
         style={{backgroundColor: "#333"}}
    >
      <Text fontSize="xl">Shop more, save more</Text>
      <Text fontSize="4xl">FREE EGP 300</Text>
      <Text>On orders of EGP 2000+</Text>
      <Stack direction={['column', 'row']} spacing={4} mt={5} justifyContent="center">
        <Button onClick={() => handleNavigate('/electronics')}>Electronics</Button>
        <Button onClick={() => handleNavigate('/jewelery')}>Jewelry</Button>
        <Button onClick={() => handleNavigate(`/men's%20clothing`)}>Men's Clothing</Button>
        <Button onClick={() => handleNavigate(`/women's%20clothing`)}>Women's Clothing</Button>
      </Stack>
    </Box>
  );
}

export default Ad1;
