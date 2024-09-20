import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProtocolData {
  protocolName: string;
  allocation: number;
}

interface PortfolioVisualization2DProps {
  protocols: ProtocolData[];
}

const PortfolioVisualization2D: React.FC<PortfolioVisualization2DProps> = ({ protocols }) => {
  const textColor = useColorModeValue('brand.text.primary', 'brand.text.secondary');
  const bgColor = useColorModeValue('brand.gray.700', 'brand.gray.600');

  const data = {
    labels: protocols.map(p => p.protocolName),
    datasets: [
      {
        data: protocols.map(p => p.allocation),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: textColor,
        },
      },
      title: {
        display: true,
        text: 'Portfolio Allocation',
        color: textColor,
      },
    },
  };

  return (
    <Box bg={bgColor} p={6} borderRadius="xl" boxShadow="xl">
      <Pie data={data} options={options} />
    </Box>
  );
};

export default PortfolioVisualization2D;