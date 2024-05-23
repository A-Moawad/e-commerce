import { Box, Text, Wrap, UnorderedList, ListItem, Flex, Stack, IconButton } from '@chakra-ui/react';
import { footerData } from './footerData';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/products/category/${path}`);
  };

  return (
    <Box bg="gray.100" p="20px" width="100%">
      <Wrap spacing="20px" justify="space-between">
        {footerData.map((section, index) => (
          <Box key={index}>
            <Text fontSize="sm" fontWeight="bold" mb={3}>{section.title}</Text>
            <UnorderedList spacing="2" style={{ listStyle: "none" }}>
              {section.items.map((item, itemIndex) => (
                <ListItem 
                  onClick={() => section.title === "SHOP BY" && handleNavigate(item)}
                  key={itemIndex} 
                  cursor={section.title === "SHOP BY"? "pointer": "" }
                  fontSize="xs" 
                  width={section.title === "NEWSLETTERS" ? "150px" : "auto"}>
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Wrap>
      <Stack mt={6} align="center">
        <Text fontSize="sm" fontWeight="bold" mb={3}>FOLLOW US</Text>
        <Flex gap={4}>
          <IconButton
            colorScheme="facebook"
            aria-label="Facebook"
            icon={<FaFacebookSquare />}
            size="md"
          />
          <IconButton
            colorScheme="twitter"
            aria-label="Twitter"
            icon={<FaSquareTwitter />}
            size="md"
          />
          <IconButton
            colorScheme="red"
            aria-label="Instagram"
            icon={<FaInstagramSquare />}
            size="md"
          />
          <IconButton
            colorScheme="red"
            aria-label="YouTube"
            icon={<FaYoutube />}
            size="md"
          />
        </Flex>
        <Text fontSize="sm" fontWeight="bold" mt={6}>EGYPT</Text>
      </Stack>
    </Box>
  );
}

export default Footer;
