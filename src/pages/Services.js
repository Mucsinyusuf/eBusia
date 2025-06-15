// src/pages/Services.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import {
  FaIdCard,
  FaHospital,
  FaSchool,
  FaTractor,
  FaBuilding,
  FaBalanceScale,
  FaTools,
  FaRecycle,
  FaShieldAlt,
  FaGavel,
} from 'react-icons/fa';

const services = [
  {
    title: 'National ID & Birth Registration (NIRA)',
    description: 'Register for a birth certificate or obtain your National ID through the NIRA system.',
    icon: FaIdCard,
    link: 'https://www.nira.go.ug',
  },
  {
    title: 'Health Services',
    description: 'Find nearby health centers, hospitals, and access immunization or maternal health info.',
    icon: FaHospital,
    link: 'https://health.go.ug',
  },
  {
    title: 'Education & Schools',
    description: 'View lists of public schools, results, and government education programs.',
    icon: FaSchool,
    link: 'https://education.go.ug',
  },
  {
    title: 'Agricultural Support',
    description: 'Access extension services, subsidized inputs, and market prices for farmers.',
    icon: FaTractor,
    link: 'https://www.agriculture.go.ug',
  },
  {
    title: 'Business Permits & Licenses',
    description: 'Apply for trading licenses, register your business, or renew your permit online.',
    icon: FaBuilding,
    link: 'https://www.ura.go.ug/business-permits',
  },
  {
    title: 'Tax Services (URA)',
    description: 'Pay local taxes, get TIN registration help, and find URA support for businesses.',
    icon: FaBalanceScale,
    link: 'https://www.ura.go.ug',
  },
  {
    title: 'Youth & Skills Training',
    description: 'Get information on vocational training centers, youth empowerment funds, and job placement programs.',
    icon: FaTools,
    link: 'https://www.noger.gov.ug', // placeholder link
  },
  {
    title: 'Waste Management & Sanitation',
    description: 'Learn about garbage collection days, sanitation rules, and public cleanliness initiatives.',
    icon: FaRecycle,
    link: 'https://www.epa.go.ug', // placeholder link
  },
  {
    title: 'Police & Public Safety',
    description: 'Locate nearby police posts, report incidents, or get help during emergencies.',
    icon: FaShieldAlt,
    link: 'https://www.upf.go.ug',
  },
  {
    title: 'Legal Aid Services',
    description: 'Find legal help, free advice days, and access community-based dispute resolution.',
    icon: FaGavel,
    link: 'https://www.judiciary.go.ug/legal-aid',
  },
];

const Services = () => {
  return (
    <Container maxW="6xl" py={12}>
      <Heading mb={10} textAlign="center" color="teal.700">
        Public Services in Busia District
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {services.map((service, i) => (
          <Box
            key={i}
            p={6}
            bg="teal.50"
            borderRadius="md"
            shadow="md"
            textAlign="center"
            _hover={{ bg: 'teal.100', transform: 'scale(1.02)', transition: '0.3s' }}
          >
            <VStack spacing={4}>
              <Icon as={service.icon} w={10} h={10} color="teal.600" />
              <Heading fontSize="lg">{service.title}</Heading>
              <Text color="gray.600">{service.description}</Text>
              <Button
                as="a"
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                colorScheme="teal"
                variant="outline"
              >
                Learn More
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Services;
