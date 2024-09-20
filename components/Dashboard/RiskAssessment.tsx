import React from 'react';
import { Box, Heading, Text, VStack, HStack, Progress, Tooltip, Grid } from '@chakra-ui/react';

interface ProtocolData {
  protocolName: string;
  riskScore?: {
    smartContractRisk: number;
    liquidityRisk: number;
    marketRisk: number;
    compositeRisk: number;
  };
}

interface RiskAssessmentProps {
  data: ProtocolData[];
}

type RiskKeys = 'smartContractRisk' | 'liquidityRisk' | 'marketRisk' | 'compositeRisk' | 'count';

interface AverageRisks {
  smartContractRisk: number;
  liquidityRisk: number;
  marketRisk: number;
  compositeRisk: number;
  count: number;
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ data }) => {
  const averageRisks: AverageRisks = {
    smartContractRisk: 0,
    liquidityRisk: 0,
    marketRisk: 0,
    compositeRisk: 0,
    count: 0
  };

  data.forEach(protocol => {
    if (protocol.riskScore) {
      averageRisks.smartContractRisk += protocol.riskScore.smartContractRisk;
      averageRisks.liquidityRisk += protocol.riskScore.liquidityRisk;
      averageRisks.marketRisk += protocol.riskScore.marketRisk;
      averageRisks.compositeRisk += protocol.riskScore.compositeRisk;
      averageRisks.count++;
    }
  });

  const protocolsWithRiskScore = averageRisks.count;

  if (protocolsWithRiskScore > 0) {
    averageRisks.smartContractRisk /= protocolsWithRiskScore;
    averageRisks.liquidityRisk /= protocolsWithRiskScore;
    averageRisks.marketRisk /= protocolsWithRiskScore;
    averageRisks.compositeRisk /= protocolsWithRiskScore;
  }

  const getRiskColor = (value: number) => {
    if (value < 0.3) return 'green.400';
    if (value < 0.6) return 'yellow.400';
    return 'red.400';
  };

  const getRiskLabel = (value: number) => {
    if (value < 0.3) return 'Low';
    if (value < 0.6) return 'Medium';
    return 'High';
  };

  return (
    <Box bg="brand.secondary" p={6} borderRadius="xl" boxShadow="xl">
      <Heading size="lg" mb={6} color="brand.text.primary">Risk Assessment</Heading>
      {protocolsWithRiskScore > 0 ? (
        <>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {Object.entries(averageRisks).map(([riskType, value]) => (
              riskType !== 'count' && (
                <Box key={riskType}>
                  <HStack justify="space-between" mb={2}>
                    <Text fontWeight="bold" color="brand.text.primary">{riskType.replace(/([A-Z])/g, ' $1').trim()}</Text>
                    <Text color={getRiskColor(value)} fontWeight="bold">{getRiskLabel(value)}</Text>
                  </HStack>
                  <Tooltip label={`${(value * 100).toFixed(2)}%`}>
                    <Box w="100%">
                      <Progress 
                        value={value * 100} 
                        colorScheme={getRiskColor(value).split('.')[0]}
                        height="24px"
                        borderRadius="md"
                        bg="whiteAlpha.200"
                      />
                    </Box>
                  </Tooltip>
                  <Text fontSize="sm" color={getRiskColor(value)} mt={1} textAlign="right" fontWeight="bold">
                    {(value * 100).toFixed(2)}%
                  </Text>
                </Box>
              )
            ))}
          </Grid>
          <Box mt={8}>
            <Heading size="md" mb={4} color="brand.text.primary">Risk Breakdown by Protocol</Heading>
            <VStack align="stretch" spacing={4}>
              {data.map((protocol, index) => (
                protocol.riskScore && (
                  <Box key={index}>
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="bold" color="brand.text.primary">{protocol.protocolName}</Text>
                      <Text color={getRiskColor(protocol.riskScore.compositeRisk)} fontWeight="bold">
                        {getRiskLabel(protocol.riskScore.compositeRisk)}
                      </Text>
                    </HStack>
                    <Box w="100%">
                      <Progress 
                        value={protocol.riskScore.compositeRisk * 100} 
                        colorScheme={getRiskColor(protocol.riskScore.compositeRisk).split('.')[0]}
                        height="16px"
                        borderRadius="md"
                        bg="whiteAlpha.200"
                      />
                    </Box>
                    <Text 
                      fontSize="sm" 
                      color={getRiskColor(protocol.riskScore.compositeRisk)} 
                      mt={1} 
                      textAlign="right"
                      fontWeight="bold"
                    >
                      {(protocol.riskScore.compositeRisk * 100).toFixed(2)}%
                    </Text>
                  </Box>
                )
              ))}
            </VStack>
          </Box>
        </>
      ) : (
        <Text color="brand.text.primary">No risk assessment data available.</Text>
      )}
    </Box>
  );
};

export default RiskAssessment;