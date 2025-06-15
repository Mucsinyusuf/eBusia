// src/pages/Contact.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  HStack,
  VStack,
  Link
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const contactDetails = [
  {
    label: 'Location',
    value: 'Busia District Local Government Headquarters, Uganda',
    icon: FaMapMarkerAlt
  },
  {
    label: 'Phone',
    value: '+256 392 001 001',
    icon: FaPhone
  },
  {
    label: 'Email',
    value: 'info@busia.go.ug',
    icon: FaEnvelope
  }
];

const Contact = () => {
  return (
    <Container maxW="4xl" py={12}>
      <Heading textAlign="center" mb={10} color="teal.700">
        Contact Busia District
      </Heading>

      <VStack spacing={6} align="start">
        {contactDetails.map((detail, i) => (
          <HStack key={i} spacing={4} align="center">
            <Icon as={detail.icon} w={6} h={6} color="teal.600" />
            <Box>
              <Text fontWeight="bold">{detail.label}</Text>
              <Text color="gray.700">{detail.value}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      <Box mt={10}>
        <iframe
          title="Busia District Map"
          src="https://maps.google.com/maps?q=Busia%20Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;
