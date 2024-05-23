import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Tooltip
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import './header.css';
import { IoCartOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box onClick={() => navigate(`/`)} cursor="pointer">
          <Heading as="h3" size="lg">
            E-Commerce
          </Heading>
      </Box>
      <Spacer />
      <Box>
        <Flex align="center">
          <Button as={Link} to="/" variant="ghost" mr="1rem">
            Home
          </Button>

          <Menu>
            <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />} mr="1rem">
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/products/category/electronics">Electronics</MenuItem>
              <MenuItem as={Link} to="/products/category/jewelery">Jewelery</MenuItem>
              <MenuItem as={Link} to="/products/category/men's%20clothing">Men's Clothing</MenuItem>
              <MenuItem as={Link} to="/products/category/women's%20clothing">Women's Clothing</MenuItem>
            </MenuList>
          </Menu>

          <Button as={Link} to="/products" variant="ghost" mr="1rem">
            Products
          </Button>

          <Button as={Link} to="/signup" variant="ghost" mr="1rem">
            Sign Up
          </Button>

          <Button as={Link} to="/login" variant="ghost">
            Login
          </Button>
          <Tooltip label="carts" placement='bottom-start'>
            <Button as={Link} to="/carts" variant="ghost">
              <IoCartOutline fontSize="24px"/>
            </Button>
          </Tooltip>
          
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
