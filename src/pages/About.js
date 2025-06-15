import React from 'react';
import { Container, Heading, Text, Box, Link } from '@chakra-ui/react';

function About() {
  return (
    <Container maxW="4xl" py={10}>
      <Heading fontSize="3xl" mb={6} color="teal.700">About eBusia</Heading>

      <Box mb={6}>
        <Text fontSize="md" color="gray.700" mb={4}>
          <strong>eBusia</strong> is a community-driven web platform created to connect the people of Busia District with essential public services, local news, and government resources in a simple and accessible way. Whether you're looking for information on health services, schools, agriculture support, business permits, or even community events — eBusia is your digital one-stop hub.
        </Text>

        <Text fontSize="md" color="gray.700" mb={4}>
          The platform highlights real-time updates and local achievements, including sports clubs like Young Stars FC, local food businesses, and service access points like NIRA, URA, and public hospitals. It’s built to empower residents with information that matters to their daily lives — using technology to make services more reachable for everyone.
        </Text>
      </Box>

      <Box>
        <Heading fontSize="xl" mb={3} color="teal.600">Who Built It?</Heading>
        <Text fontSize="md" color="gray.700" mb={2}>
          eBusia was developed by <strong>Mucsin Yusuf</strong>, a passionate Software Developer from Busia who believes in using ICT for community empowerment and better governance. With a background in web development, system administration, and agricultural tech, Mucsin designed eBusia to bring transparency, awareness, and local pride to Busia's digital space.
        </Text>
        <Text fontSize="md" color="gray.700">
          👉 For more about Mucsin, visit his portfolio:{" "}
          <Link href="https://muxsin.vercel.app" color="teal.500" isExternal>
            https://muxsin.vercel.app
          </Link>
        </Text>
      </Box>
    </Container>
  );
}

export default About;
