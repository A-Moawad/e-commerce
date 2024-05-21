import { Box, Text, Wrap, UnorderedList, ListItem, Flex, Stack, IconButton } from '@chakra-ui/react';
import { footerData } from './footerData';

import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg="gray.100" p="20px" width="100vw">
      <Wrap spacing="20px" justify="space-between">
        {footerData.map((section, index) => (
          <Box key={index}>
            <Text fontSize="sm" fontWeight="bold" mb={3}>{section.title}</Text>
            <UnorderedList spacing="2" style={{ listStyle: "none" }}>
              {section.items.map((item, itemIndex) => (
                <ListItem key={itemIndex} cursor="pointer" fontSize="xs" width={section.title === "NEWSLETTERS" ? "150px" : "auto"}>
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Wrap>
      <Stack mt={6}>
        <Text fontSize="sm" fontWeight="bold" mb={3}>FOLLOW US</Text>
        <Flex gap={4} justifyContent="center">
          <IconButton
            colorScheme="facebook"
            aria-label="Facebook"
            icon={<FaFacebookSquare />}
            size="sm"
          />
          <IconButton
            colorScheme="twitter"
            aria-label="Twitter"
            icon={<FaSquareTwitter />}
            size="sm"
          />
          <IconButton
            colorScheme="red"
            aria-label="Instagram"
            icon={<FaInstagramSquare />}
            size="sm"
          />
          <IconButton
            colorScheme="red"
            aria-label="YouTube"
            icon={<FaYoutube />}
            size="sm"
          />
        </Flex>
        {/* <Text fontSize="sm" fontWeight="bold" mt={6}>CONTACT US</Text> */}
        <Text fontSize="sm" fontWeight="bold" mt={6}>EGYPT</Text>
      </Stack>
    </Box>
  );
}

export default Footer;
