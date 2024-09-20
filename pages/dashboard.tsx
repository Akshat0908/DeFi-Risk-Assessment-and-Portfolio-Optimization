import { useEffect, useState, useCallback, useMemo } from 'react';
import { Box, Container, VStack, Text, Heading, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import Layout from '../components/Layout'
import PortfolioOverview from '../components/Dashboard/PortfolioOverview'
import RiskAssessment from '../components/Dashboard/RiskAssessment'
import YieldPrediction from '../components/Dashboard/YieldPrediction'
import PortfolioOptimization from '../components/Dashboard/PortfolioOptimization'
import { DataAggregator } from '../lib/DataAggregator'
import { RiskAssessmentEngine } from '../lib/RiskAssessmentEngine'
import { PortfolioOptimizationEngine } from '../lib/PortfolioOptimizationEngine'
import { YieldPredictionSystem } from '../lib/YieldPredictionSystem'

interface ProtocolData {
  protocolName: string;
  chain: string;
  tvl: number;
  apy: number;
  riskScore?: {
    smartContractRisk: number;
    liquidityRisk: number;
    marketRisk: number;
    compositeRisk: number;
  };
  allocation?: number;
  predictedYield?: number;
}

const Dashboard: React.FC = () => {
  const { active, library } = useWeb3React()
  const [rawData, setRawData] = useState<ProtocolData[]>([]);
  const [riskTolerance, setRiskTolerance] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [yieldPredictionSystem] = useState(() => new YieldPredictionSystem());

  const fetchData = useCallback(async () => {
    console.log("Fetching data...");
    setIsLoading(true);
    setError(null);
    try {
      const dataAggregator = new DataAggregator();
      const data = await dataAggregator.aggregateData();
      console.log("Fetched data:", data);
      setRawData(data);
    } catch (err) {
      console.error('Error in fetchData:', err);
      setError('Failed to fetch data. Please check your network connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const processedData = useMemo(() => {
    if (rawData.length === 0) return [];

    const riskEngine = new RiskAssessmentEngine();
    const optimizationEngine = new PortfolioOptimizationEngine(riskEngine);

    const dataWithRisk = rawData.map(protocol => ({
      ...protocol,
      riskScore: riskEngine.assessRisk(protocol),
    }));

    const allocations = optimizationEngine.optimizePortfolio(dataWithRisk, riskTolerance);
    
    return dataWithRisk.map((protocol, index) => ({
      ...protocol,
      allocation: allocations[index],
      predictedYield: yieldPredictionSystem.predictYield(protocol),
    }));
  }, [rawData, riskTolerance, yieldPredictionSystem]);

  const handleRiskToleranceChange = useCallback((newRiskTolerance: number) => {
    setRiskTolerance(newRiskTolerance);
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Container>
          <VStack spacing={4} align="center" justify="center" height="100vh">
            <Spinner size="xl" color="brand.primary" />
            <Text color="brand.text.primary">Loading dashboard data...</Text>
          </VStack>
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container>
          <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Failed to fetch data
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {error}
              <Text mt={2} cursor="pointer" color="brand.primary" onClick={fetchData}>
                Click here to try again
              </Text>
            </AlertDescription>
          </Alert>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box minH="100vh" bg="brand.background" color="brand.text.primary">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch" mt="70px">
            <Heading as="h1" size="xl">DeFi Portfolio Dashboard</Heading>
            
            <Box bg="brand.card" borderRadius="xl" p={6} boxShadow="xl">
              <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList mb={6}>
                  <Tab _selected={{ color: 'white', bg: 'brand.primary' }}>Overview</Tab>
                  <Tab _selected={{ color: 'white', bg: 'brand.primary' }}>Risk Assessment</Tab>
                  <Tab _selected={{ color: 'white', bg: 'brand.primary' }}>Yield Prediction</Tab>
                  <Tab _selected={{ color: 'white', bg: 'brand.primary' }}>Portfolio Optimization</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <PortfolioOverview data={processedData} isLoading={isLoading} />
                  </TabPanel>
                  <TabPanel>
                    <RiskAssessment data={processedData} />
                  </TabPanel>
                  <TabPanel>
                    <YieldPrediction data={processedData} timeFrame="24h" />
                  </TabPanel>
                  <TabPanel>
                    <PortfolioOptimization 
                      data={processedData}
                      riskTolerance={riskTolerance}
                      onRiskToleranceChange={handleRiskToleranceChange}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default Dashboard;