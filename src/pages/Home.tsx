import { Box, Text, HStack, Stack, Button } from "@chakra-ui/react";
import '../App.css';
const Home = () => {
  return (
    <Box p={5} width="80vw"  mx="auto">
      <Stack spacing={4} align="center">
        <Box  w="100%"
         p={5} borderRadius="5px" 
         textAlign="center"
          fontWeight="bold" 
          color="#fff" 
          style={{backgroundColor: "#333"}}
          >
          <Text fontSize="xl" >Shop more, save more</Text>
          <Text fontSize="4xl" >FREE EGP 300</Text>
          <Text>On orders of EGP 2000+</Text>
        <HStack spacing={4} mt={5}>
          <Button >Electronics</Button>
          <Button >Jewelery</Button>
          <Button >Men's Clothing</Button>
          <Button >Women's Clothing</Button>
        </HStack>
        </Box>
        <Box 
        className="image-container"
        >
          <Box 
            className="image"
            height="80vh"
          ></Box>
          <Box className="ad-address">
            <Text fontSize="5xl">SUMMER 2024</Text>
            <Text fontSize="3xl"> NEW LOWER PRICES</Text>
            <Text >Set the mode for the season.</Text>
          </Box>
          <Button className="ad-button">Shop now</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
