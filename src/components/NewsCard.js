// src/components/NewsCard.js
import React from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const NewsCard = ({ news }) => {
  return (
    <Box p={4} bg="white" borderWidth="1px" borderRadius="lg" shadow="md">
      {news.image && (
        <Image
          src={news.image}
          alt={news.title}
          borderRadius="md"
          height="180px"
          width="100%"
          objectFit="cover"
          mb={3}
        />
      )}
      <Heading fontSize="xl" mb={1}>{news.title}</Heading>
      <Text fontSize="sm" color="gray.500">{news.date}</Text>
      <Text mt={2} fontSize="md" color="gray.700">{news.content}</Text>
    </Box>
  );
};

export default NewsCard;
