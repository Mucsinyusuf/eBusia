// src/pages/News.js
import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Link,
} from '@chakra-ui/react';

import youngstars from '../assets/youngstars1.jpg';
import ambulance from '../assets/ambulance.jpg';
import BusiaRoad from '../assets/BusiaRoad.jpg';
import litteracy from '../assets/litteracy.jpg';
import Irish from '../assets/Irish.jpg';
import Exchange from '../assets/Exchange.jpg';
const newsList = [
  {
    title: 'Young Stars FC Shines in Eastern Regional League',
    date: 'June 12, 2025',
    content:
      'Young Stars FC, Busia Town’s pride and only team representing the district in the Eastern Regional League, continues to impress fans and scouts alike with their disciplined performances and rising young talent. Based at Busia Integrated Grounds, the team has built a solid reputation for its strong midfield control and fast-paced wingers.\n\n' +
      'Led by a visionary technical coach, Young Stars FC combines tactical discipline with grassroots enthusiasm. The club’s commitment to nurturing youth talent from local communities like Dabani, Masafu, and Majanji has attracted admiration across the region.\n\n' +
      'Recent matches have seen the team edge out experienced opponents with brilliant finishes and sharp defending. Local leaders and football lovers are rallying behind the club, hoping to see it advance to the Big League in the coming years.',
    image: youngstars,
    link: 'https://www.ugandafootball.com/team_scores.php?t=uftm01159',
  },
  {
    title: 'Busia Hospital Receives New Ambulance',
    date: 'June 10, 2025',
    content:
      'In a ceremony attended by the LC5 Chairperson and the Ministry of Health delegation, Busia District Hospital received a fully equipped ambulance under the national health infrastructure improvement program. The ambulance will be deployed for maternal emergencies, road accidents, and critical transfers from sub-county health centres like Masafu and Lumino. Residents have praised the government for this lifesaving intervention.',
    image: ambulance,
  },
  {
    title: 'Busia Town Roads Under Renovation',
    date: 'June 5, 2025',
    content:
      'Construction work has begun on key roads within Busia Municipality, including Majanji Road and Old Custom Road. The LC5 Chairperson flagged off the 3-month project, which aims to improve drainage, fix potholes, and enhance market access. The project is funded by the Uganda Road Fund in collaboration with the Ministry of Works. Business owners have expressed hope that this facelift will boost trade and reduce dust during dry seasons.',
    image: BusiaRoad,
  },
  {
    title: 'District Education Office Launches New Literacy Program',
    date: 'June 2, 2025',
    content:
      'In an effort to improve literacy rates among lower primary pupils, the Busia District Education Office launched a new reading program called "Busia Reads." The initiative targets 50 government-aided schools, offering reading materials, teacher training, and parent engagement. The DEO noted that early reading habits improve academic performance and pledged more partnerships with NGOs to expand the program. Teachers from Buteba, Masinya, and Lunyo sub-counties have already begun orientation.',
    image: litteracy,
  },
  {
  title: 'Irish Pilau Hits Busia Food Corners',
  date: 'June 14, 2025',
  content:
    'Busia residents can’t get enough of Chef IRISH "The Pillau Guy" signature Irish Pilau — a flavorful twist on the traditional dish that’s taking over food joints from Solo to Sofia. The mix of soft Irish potatoes, perfectly spiced beef, and aromatic rice has earned it the nickname “Taste of Busia.”\n\n' +
    '“You haven’t tasted real Pilau if it’s not Ras Iddi’s,” one fan joked. Locals are lining up every evening for a plate of this savory delight. And Biriyani on Fridays. The chef says he draws inspiration from coastal Swahili recipes blended with Busia’s native spices.\n\n' +
    'If you’re passing through Busia town, don’t leave without tasting this culinary masterpiece.',
  image: Irish
 },
{
  title: 'Dogoo J Enterprise Offers Best Exchange Rates In The Town',
  date: 'June 13, 2025',
  content:
    'Dogoo J Enterprise, the most trusted money exchange point in Arubaine Opposite Jamia Mosque, continues to lead the market with unbeatable rates on Kenyan Shillings (KES) to Ugandan Shillings (UGX), and vice versa. Known for its transparency, fast service, and reliable currency handling, Dogoo J is the go-to spot for traders, travelers, and businesspeople crossing the Busia border.\n\n' +
    'Locals praise the enterprise for providing honest rates without hidden charges, while regional traders appreciate its quick turnaround times and friendly service. “Whenever I’m in Town, I don’t even ask — I go straight to Dogoo J,” said one trader.\n\n' +
    'The shop operates seven days a week and now also offers bulk exchange services for importers and exporters.',
  image: Exchange
}



];

const News = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNews, setSelectedNews] = useState(null);

  const handleOpen = (news) => {
    setSelectedNews(news);
    onOpen();
  };

  return (
    <Container maxW="6xl" py={12}>
      <Heading mb={10} textAlign="center" color="teal.700">
        Busia District News
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {newsList.map((news, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="md"
            shadow="md"
            overflow="hidden"
            cursor="pointer"
            _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
            onClick={() => handleOpen(news)}
          >
            <Image src={news.image} alt={news.title} height="200px" width="100%" objectFit="cover" />
            <Box p={4}>
              <Heading fontSize="lg">{news.title}</Heading>
              <Text fontSize="sm" color="gray.500" mt={2}>
                {news.date}
              </Text>
              <Text noOfLines={2} mt={2} color="gray.600">
                {news.content}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {selectedNews && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedNews.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Image src={selectedNews.image} alt={selectedNews.title} borderRadius="md" mb={4} />
              <Text fontSize="sm" color="gray.500" mb={2}>
                {selectedNews.date}
              </Text>
              <Text color="gray.700" mb={2} whiteSpace="pre-line">
                {selectedNews.content}
              </Text>
              {selectedNews.link && (
                <Text mt={2}>
                  <Link href={selectedNews.link} isExternal color="teal.600" fontWeight="bold">
                    🔗 View Games & Fixtures
                  </Link>
                </Text>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default News;
