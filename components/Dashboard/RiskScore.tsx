import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const RiskScore: React.FC = () => {
  return (
    <Box>
      <Heading size="md">Risk Score</Heading>
      <Text>Overall Risk: Medium</Text>
      <Text>Score: 65/100</Text>
      {/* Add more risk assessment details here */}
    </Box>
  );
};

export default RiskScore;