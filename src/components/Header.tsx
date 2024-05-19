import { Box, Flex, Spacer, Heading, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
        
      <Box>
        <Heading as="h1" size="lg">
          E-Commerce
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Flex align="center">
          <Button as={Link} to="/" variant="ghost" mr="1rem">
            Home
          </Button>
          <Button as={Link} to="/products/gategories" variant="ghost" mr="1rem">
            Categories
          </Button>
          <Button as={Link} to="/products" variant="ghost" mr="1rem">
            Products
          </Button>
          <Button as={Link} to="/signup" variant="ghost">
            Sign Up
          </Button>
          <Button as={Link} to="/login" variant="ghost">
            Login
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
