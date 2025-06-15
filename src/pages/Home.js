import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Boarder1 from '../assets/Boarder1.jpg';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
         bgImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Boarder1})`}
        bgSize="cover"
        bgPosition="center"
        color="white"
        py={20}
        textAlign="center"
      >
        <Container maxW="6xl">
          <VStack spacing={6}>
            <Heading fontSize={{ base: '3xl', md: '5xl' }}>Welcome to eBusia Portal</Heading>
            <Text fontSize={{ base: 'md', md: 'xl' }} maxW="2xl">
              A modern digital platform to connect citizens of Busia with essential government services, leadership, and community news.
            </Text>
            <Button as={RouterLink} to="/services" colorScheme="teal" size="lg">
              Explore Services
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Container maxW="6xl" py={16}>
        <Heading fontSize="2xl" mb={8} textAlign="center" color="teal.700">Quick Access</Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Box bg="teal.50" p={6} borderRadius="md" shadow="md">
              <Heading size="md" mb={2}>Meet Your Leaders</Heading>
              <Text mb={4}>Get to know the MPs, governor, and officials representing Busia.</Text>
              <Button as={RouterLink} to="/leadership" colorScheme="teal" size="sm">View Leaders</Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="teal.50" p={6} borderRadius="md" shadow="md">
              <Heading size="md" mb={2}>Public Services</Heading>
              <Text mb={4}>Access e-services like land, taxes, licenses, and health.</Text>
              <Button as={RouterLink} to="/services" colorScheme="teal" size="sm">View Services</Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="teal.50" p={6} borderRadius="md" shadow="md">
              <Heading size="md" mb={2}>Latest News</Heading>
              <Text mb={4}>Stay informed with updates from Busia County offices.</Text>
              <Button as={RouterLink} to="/news" colorScheme="teal" size="sm">Read News</Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Banner Section */}
      <Box bg="gray.100" py={10} textAlign="center">
        <Container maxW="4xl">
          <Text fontSize="lg" color="gray.700">
            "At eBusia, we believe in transparency, accessibility, and empowering citizens through digital innovation."
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
