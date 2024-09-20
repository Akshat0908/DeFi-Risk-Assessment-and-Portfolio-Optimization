import React from 'react';
import { Box, Heading, Text, AspectRatio } from '@chakra-ui/react';

const RiskEducationTutorial: React.FC = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Risk Education Tutorial
      </Heading>
      <Text mb={4}>
        Learn about the various risks associated with DeFi investments and how to manage them effectively.
      </Text>
      <AspectRatio maxW="960px" ratio={16 / 9}>
        <video controls>
          <source src="/invideo-ai-1080 Explore the Future of DeFi_ A 3D Visuali 2024-09-18.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
      <Text mt={4}>
        This video explores the future of DeFi through a 3D visualization, covering key concepts such as smart contract risk, liquidity risk, and market risk in the context of DeFi protocols.
      </Text>
    </Box>
  );
};

export default RiskEducationTutorial;