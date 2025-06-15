import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Divider
} from '@chakra-ui/react';

import machoImg from '../assets/Macho.jpg';
import wanderaImg from '../assets/Hellen-Auma-Wandera.jpg';
import nabongo from '../assets/nabongo.jpg';

const leaders = [
  {
    name: 'Hon. Geoffrey Macho',
    role: 'MP – Busia Municipality',
    image: machoImg,
    achievements: 'Improved road networks, advocated for Busia Hospital funding, supported border market development.',
    vision2027: 'Expand access to technical education, improve sanitation, and boost cross-border trade.'
  },
  {
    name: 'Hon. Hellen Auma Wandera',
    role: 'Woman MP – Busia District',
    image: wanderaImg,
    achievements: 'Led youth skilling programs, improved girl-child education, and championed women’s health initiatives.',
    vision2027: 'Increase women entrepreneurship programs and establish a district girl education fund.'
  },
  {
    name: 'Hon. Godfrey Watenga Nabongo',
    role: 'LC5 Chairperson – Busia District',
    image: nabongo,
    achievements: 'Oversaw construction of new schools, enhanced agricultural subsidies, improved transparency in governance.',
    vision2027: 'Digitize services, improve healthcare, and build more community roads.'
  }
];

const Leadership = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLeader, setSelectedLeader] = useState(null);

  const handleOpen = (leader) => {
    setSelectedLeader(leader);
    onOpen();
  };

  return (
    <Container maxW="6xl" py={12}>
      <Heading mb={10} textAlign="center" color="teal.700">
        Leaders of Busia District
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {leaders.map((leader, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="md"
            shadow="md"
            overflow="hidden"
            _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
          >
            <Image src={leader.image} alt={leader.name} height="250px" width="100%" objectFit="cover" />
            <Box p={4}>
              <Heading fontSize="lg">{leader.name}</Heading>
              <Text color="gray.600" mb={3}>{leader.role}</Text>
              <Button colorScheme="teal" variant="outline" onClick={() => handleOpen(leader)}>
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedLeader?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image src={selectedLeader?.image} alt={selectedLeader?.name} mb={4} borderRadius="md" />
            <Text fontWeight="bold">Role:</Text>
            <Text mb={3}>{selectedLeader?.role}</Text>
            <Divider my={2} />
            <Text fontWeight="bold">Achievements:</Text>
            <Text mb={3}>{selectedLeader?.achievements}</Text>
            <Divider my={2} />
            <Text fontWeight="bold">Vision for 2027:</Text>
            <Text>{selectedLeader?.vision2027}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Leadership;
