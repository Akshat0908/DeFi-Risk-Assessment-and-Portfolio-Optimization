import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Link, Spinner, Heading, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';

interface NewsItem {
  title: string;
  url: string;
  publishedAt: string;
}

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your actual news API endpoint
        const response = await axios.get('https://api.example.com/defi-news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" color="brand.primary" />
      </Box>
    );
  }

  return (
    <Box bg="brand.card" p={6} borderRadius="xl" boxShadow="xl">
      <Heading size="lg" mb={4} color="brand.text.primary">DeFi News Feed</Heading>
      <VStack align="stretch" spacing={4}>
        {news.map((item, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" borderColor="brand.accent" _hover={{ bg: 'brand.accent', transition: 'all 0.3s' }}>
            <Link href={item.url} isExternal color="brand.text.primary" fontWeight="bold" _hover={{ color: 'brand.primary' }}>
              {item.title}
            </Link>
            <Text fontSize="sm" color="brand.text.secondary" mt={2}>
              {new Date(item.publishedAt).toLocaleDateString()}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default NewsFeed;