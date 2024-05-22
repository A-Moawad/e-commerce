import { Box, Stack } from "@chakra-ui/react";
import './home.css';
import Ad1 from "./Ad1";
import Ad2 from "./Ad2";
const Home = () => {
  return (
    <Box p={5} width="80vw"  mx="auto">
      <Stack spacing={4} align="center">
        <Ad1/>
        <Ad2/>
      </Stack>
    </Box>
  );
};

export default Home;
