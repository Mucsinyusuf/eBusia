import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="gray.100" py={4} mt={10} textAlign="center">
    <Text fontSize="sm" color="gray.600">
      &copy; {new Date().getFullYear()} eBusia — All rights reserved.
    </Text>
  </Box>
);

export default Footer;
