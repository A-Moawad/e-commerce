import {Link as RouterLink} from "react-router-dom";
import {Link as ChakraLink} from "@chakra-ui/react";
import {
  Image,
  Text,
  Heading,
  LinkOverlay,
  LinkBox,
  Center
} from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
function Cart({product}) {
  return (
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
  );
}

export default Cart;
