import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function Ad2() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/products`);
  };

  return (
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
          <Button 
            className="ad-button"
            onClick={handleNavigate}
          >Shop now</Button>
        </Box>
  );
}

export default Ad2;
