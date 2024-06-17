import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="black" color="white" px={4} py={2}>
      <Flex align="center">
        <Link href="/" fontSize="2xl" fontWeight="bold">Huly</Link>
        <Spacer />
        <Link href="/features" mx={2}>Features</Link>
        <Link href="/pricing" mx={2}>Pricing</Link>
        <Link href="/community" mx={2}>Community</Link>
        <Button colorScheme="orange" ml={4}>Sign In</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;