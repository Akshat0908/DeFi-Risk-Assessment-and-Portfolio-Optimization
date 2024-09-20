import React, { useState, useCallback, useEffect } from 'react';
import { Box, Heading, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, VStack, HStack, Progress, Tooltip } from '@chakra-ui/react';
import { debounce } from 'lodash';

interface ProtocolData {
  protocolName: string;
  allocation: number;
}

interface PortfolioOptimizationProps {
  data: ProtocolData[];
  riskTolerance: number;
  onRiskToleranceChange: (value: number) => void;
}

const PortfolioOptimization: React.FC<PortfolioOptimizationProps> = ({ data, riskTolerance, onRiskToleranceChange }) => {
  const [localRiskTolerance, setLocalRiskTolerance] = useState(riskTolerance);

  const debouncedOnRiskToleranceChange = useCallback(
    debounce((value: number) => {
      onRiskToleranceChange(value);
    }, 300),
    [onRiskToleranceChange]
  );

  useEffect(() => {
    setLocalRiskTolerance(riskTolerance);
  }, [riskTolerance]);

  const handleSliderChange = (value: number) => {
    setLocalRiskTolerance(value);
    debouncedOnRiskToleranceChange(value);
  };

  return (
    <Box bg="brand.card" p={6} borderRadius="xl" boxShadow="xl">
      <Heading size="lg" mb={4} color="brand.text.primary">Portfolio Optimization</Heading>
      <VStack spacing={6} align="stretch">
        <Box>
          <Text mb={2} color="brand.text.secondary">Risk Tolerance: {localRiskTolerance.toFixed(2)}</Text>
          <Slider
            aria-label="risk-tolerance-slider"
            value={localRiskTolerance}
            onChange={handleSliderChange}
            min={0}
            max={1}
            step={0.01}
          >
            <SliderTrack bg="brand.accent">
              <SliderFilledTrack bg="brand.primary" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Box>
        <Box>
          <Heading size="md" mb={2} color="brand.text.primary">Optimized Allocations</Heading>
          <VStack align="stretch" spacing={3}>
            {data.map((protocol, index) => (
              <HStack key={index} justify="space-between">
                <Text color="brand.text.secondary">{protocol.protocolName}</Text>
                <Tooltip label={`${(protocol.allocation * 100).toFixed(2)}%`}>
                  <Progress 
                    value={protocol.allocation * 100} 
                    size="sm" 
                    width="50%" 
                    colorScheme="blue"
                    borderRadius="full"
                  />
                </Tooltip>
                <Text color="brand.text.primary" fontWeight="bold">{(protocol.allocation * 100).toFixed(2)}%</Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default PortfolioOptimization;