import React from 'react';
import { Box, Container, Heading, Text, AspectRatio } from '@chakra-ui/react';
import Layout from '../components/Layout';

const Tutorial: React.FC = () => {
  return (
    <Layout>
      <Box minH="100vh" bg="brand.background" color="brand.text.primary">
        <Container maxW="container.xl" py={8}>
          <Heading as="h1" size="2xl" mb={6}>DeFi Risk Platform Tutorial</Heading>
          <Text fontSize="xl" mb={8}>
            Learn about the various risks associated with DeFi investments and how to manage them effectively using our platform.
          </Text>
          <AspectRatio maxW="960px" ratio={16 / 9} mx="auto">
            <video controls>
              <source src="/invideo-ai-1080 Explore the Future of DeFi_ A 3D Visuali 2024-09-18.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
          <Text mt={8}>
            This video explores the future of DeFi through a 3D visualization, covering key concepts such as smart contract risk, liquidity risk, and market risk in the context of DeFi protocols. It also demonstrates how to use our platform to assess and manage these risks effectively.
          </Text>
        </Container>
      </Box>
    </Layout>
  );
};

export default Tutorial;