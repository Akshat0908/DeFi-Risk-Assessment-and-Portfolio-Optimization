import React, { useState, useMemo } from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Flex, Input, Select, Tooltip } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

interface Protocol {
  protocolName: string;
  apy: number;
  predictedYield: number;
}

interface YieldPredictionProps {
  data: Protocol[];
  timeFrame: string;
}

const YieldPrediction: React.FC<YieldPredictionProps> = ({ data, timeFrame }) => {
  const [sortColumn, setSortColumn] = useState<keyof Protocol>('protocolName');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [apyRange, setApyRange] = useState<[number, number]>([0, 100]);

  const processedData = useMemo(() => {
    return data.map(protocol => ({
      ...protocol,
      predictedYield: protocol.apy * (1 + (Math.random() - 0.5) * 0.2) // Add ±10% variation
    }));
  }, [data]);

  const sortedData = useMemo(() => {
    return [...processedData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [processedData, sortColumn, sortDirection]);

  const filteredData = useMemo(() => {
    return sortedData.filter(
      (protocol) =>
        protocol.protocolName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        protocol.apy * 100 >= apyRange[0] &&
        protocol.apy * 100 <= apyRange[1]
    );
  }, [sortedData, searchTerm, apyRange]);

  const averageCurrentAPY = useMemo(() => {
    return processedData.reduce((sum, protocol) => sum + protocol.apy, 0) / processedData.length;
  }, [processedData]);

  const averagePredictedYield = useMemo(() => {
    return processedData.reduce((sum, protocol) => sum + protocol.predictedYield, 0) / processedData.length;
  }, [processedData]);

  const handleSort = (column: keyof Protocol) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box bg="brand.card" p={3} borderRadius="md" boxShadow="lg">
          <Text fontWeight="bold" color="brand.text.primary">{label}</Text>
          <Text color="green.400">Current APY: {payload[0].value.toFixed(2)}%</Text>
          <Text color="blue.400">Predicted Yield: {payload[1].value.toFixed(2)}%</Text>
          <Text color="brand.text.secondary">
            Difference: {(payload[1].value - payload[0].value).toFixed(2)}%
          </Text>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box bg="brand.card" color="brand.text.primary" p={6} borderRadius="lg" boxShadow="xl">
      <Heading as="h2" size="xl" mb={6} color="brand.text.primary">Yield Prediction ({timeFrame})</Heading>
      <Flex justify="space-between" mb={8}>
        <Box bg="brand.secondary" p={4} borderRadius="md" flex="1" mr={4}>
          <Heading size="md" mb={2} color="brand.text.primary">Average Current APY</Heading>
          <Text fontSize="2xl" fontWeight="bold" color="green.400">{(averageCurrentAPY * 100).toFixed(2)}%</Text>
        </Box>
        <Box bg="brand.secondary" p={4} borderRadius="md" flex="1">
          <Heading size="md" mb={2} color="brand.text.primary">Average Predicted Yield</Heading>
          <Text fontSize="2xl" fontWeight="bold" color="blue.400">{(averagePredictedYield * 100).toFixed(2)}%</Text>
        </Box>
      </Flex>
      <Flex mb={4} align="center">
        <Input
          placeholder="Search protocols..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mr={4}
          color="brand.text.primary"
          _placeholder={{ color: "brand.text.secondary" }}
        />
        <Select
          value={`${apyRange[0]}-${apyRange[1]}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split('-').map(Number);
            setApyRange([min, max]);
          }}
          color="brand.text.primary"
        >
          <option value="0-100">All APY</option>
          <option value="0-5">0-5%</option>
          <option value="5-10">5-10%</option>
          <option value="10-20">10-20%</option>
          <option value="20-100">20%+</option>
        </Select>
      </Flex>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="brand.text.primary" cursor="pointer" onClick={() => handleSort('protocolName')}>PROTOCOL</Th>
              <Th color="brand.text.primary" cursor="pointer" onClick={() => handleSort('apy')} isNumeric>CURRENT APY</Th>
              <Th color="brand.text.primary" cursor="pointer" onClick={() => handleSort('predictedYield')} isNumeric>PREDICTED YIELD</Th>
              <Th color="brand.text.primary">TREND</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((protocol) => (
              <Tr key={protocol.protocolName}>
                <Td color="brand.text.primary">{protocol.protocolName}</Td>
                <Td color="brand.text.primary" isNumeric>{(protocol.apy * 100).toFixed(2)}%</Td>
                <Td color="brand.text.primary" isNumeric>{(protocol.predictedYield * 100).toFixed(2)}%</Td>
                <Td>
                  {protocol.predictedYield > protocol.apy ? (
                    <ArrowUpIcon color="green.400" />
                  ) : (
                    <ArrowDownIcon color="red.400" />
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box height="400px" mt={8}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={filteredData}>
            <XAxis dataKey="protocolName" tick={{ fill: 'brand.text.secondary' }} />
            <YAxis tick={{ fill: 'brand.text.secondary' }} />
            <RechartsTooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: 'brand.text.primary' }} />
            <ReferenceLine y={averageCurrentAPY * 100} stroke="#2ecc71" strokeDasharray="3 3" label={{ value: 'Avg Current APY', position: 'insideTopLeft', fill: '#2ecc71' }} />
            <ReferenceLine y={averagePredictedYield * 100} stroke="#3498db" strokeDasharray="3 3" label={{ value: 'Avg Predicted Yield', position: 'insideTopRight', fill: '#3498db' }} />
            <Bar dataKey="apy" name="Current APY" fill="#2ecc71" />
            <Bar dataKey="predictedYield" name="Predicted Yield" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default YieldPrediction;