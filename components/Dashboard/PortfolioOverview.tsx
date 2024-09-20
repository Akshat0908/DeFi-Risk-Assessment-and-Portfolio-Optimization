import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Stat, StatLabel, StatNumber, Table, Thead, Tbody, Tr, Th, Td, Progress, Tooltip, Flex, IconButton, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, Legend);

interface ProtocolData {
  protocolName: string;
  chain: string;
  tvl: number;
  apy: number;
  riskScore?: {
    compositeRisk: number;
  };
  allocation?: number;
  predictedYield?: number;
}

interface PortfolioOverviewProps {
  data: ProtocolData[];
  isLoading: boolean;
}

const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" color="brand.primary" />
        <Text mt={4}>Loading portfolio data...</Text>
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Alert status="warning">
        <AlertIcon />
        No portfolio data available. Please check your data source.
      </Alert>
    );
  }

  const totalValue = data.reduce((sum, protocol) => sum + (protocol.tvl * (protocol.allocation || 0)), 0);
  const totalRisk = data.reduce((sum, protocol) => sum + ((protocol.riskScore?.compositeRisk || 0) * (protocol.allocation || 0)), 0) / data.length;
  const averageYield = data.reduce((sum, protocol) => sum + (protocol.apy * (protocol.allocation || 0)), 0);

  const pieChartData = {
    labels: data.map(p => p.protocolName),
    datasets: [
      {
        data: data.map(p => p.tvl * (p.allocation || 0)),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
    },
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg">Portfolio Overview</Heading>
        <Tooltip label="Search protocols">
          <IconButton aria-label="Search" icon={<SearchIcon />} variant="ghost" color="white" />
        </Tooltip>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <VStack align="stretch" spacing={4}>
          <Tooltip label="Total value locked across all protocols in your portfolio">
            <Stat bg="brand.card" p={4} borderRadius="xl" boxShadow="md">
              <StatLabel fontSize="md">Total Value Locked</StatLabel>
              <StatNumber fontSize="2xl">${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</StatNumber>
            </Stat>
          </Tooltip>
          <Tooltip label="Average risk score of your portfolio">
            <Stat bg="brand.card" p={4} borderRadius="xl" boxShadow="md">
              <StatLabel fontSize="md">Average Risk</StatLabel>
              <StatNumber fontSize="2xl">{(totalRisk * 100).toFixed(2)}%</StatNumber>
            </Stat>
          </Tooltip>
          <Tooltip label="Projected annual yield based on current allocations">
            <Stat bg="brand.card" p={4} borderRadius="xl" boxShadow="md">
              <StatLabel fontSize="md">Projected Annual Yield</StatLabel>
              <StatNumber fontSize="2xl">{(averageYield * 100).toFixed(2)}%</StatNumber>
            </Stat>
          </Tooltip>
        </VStack>
        <Box bg="brand.card" p={4} borderRadius="xl" boxShadow="md">
          <Heading size="md" mb={4}>Asset Allocation</Heading>
          <Pie data={pieChartData} options={chartOptions} />
        </Box>
        <Box bg="brand.card" p={4} borderRadius="xl" boxShadow="md" overflowX="auto">
          <Heading size="md" mb={4}>Protocol Breakdown</Heading>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th color="brand.text.secondary">Protocol</Th>
                <Th isNumeric color="brand.text.secondary">Allocation</Th>
                <Th isNumeric color="brand.text.secondary">Risk</Th>
                <Th isNumeric color="brand.text.secondary">APY</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((protocol, index) => (
                <Tr key={index}>
                  <Td color="white">{protocol.protocolName}</Td>
                  <Td isNumeric color="white">{protocol.allocation ? (protocol.allocation * 100).toFixed(2) : 'N/A'}%</Td>
                  <Td isNumeric>
                    <Tooltip label={`Risk score: ${((protocol.riskScore?.compositeRisk || 0) * 100).toFixed(2)}%`}>
                      <Progress 
                        value={(protocol.riskScore?.compositeRisk || 0) * 100} 
                        size="sm" 
                        colorScheme={(protocol.riskScore?.compositeRisk || 0) > 0.6 ? "red" : (protocol.riskScore?.compositeRisk || 0) > 0.3 ? "yellow" : "green"} 
                      />
                    </Tooltip>
                  </Td>
                  <Td isNumeric color="white">{(protocol.apy * 100).toFixed(2)}%</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PortfolioOverview;