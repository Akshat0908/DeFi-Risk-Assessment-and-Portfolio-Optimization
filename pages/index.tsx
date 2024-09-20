import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import WelcomePopup from '../components/WelcomePopup'

const DynamicTokenGalaxy = dynamic(() => import('../components/TokenGalaxy'), {
  ssr: false,
})

// Sample token data - replace this with real data from your API
const sampleTokens = [
  { name: 'Bitcoin', marketCap: 1000000000000, riskLevel: 0.2 },
  { name: 'Ethereum', marketCap: 500000000000, riskLevel: 0.3 },
  { name: 'Aave', marketCap: 5000000000, riskLevel: 0.5 },
  { name: 'Uniswap', marketCap: 10000000000, riskLevel: 0.6 },
  { name: 'Compound', marketCap: 3000000000, riskLevel: 0.4 },
  { name: 'Chainlink', marketCap: 8000000000, riskLevel: 0.4 },
  { name: 'Polygon', marketCap: 7000000000, riskLevel: 0.5 },
  { name: 'Solana', marketCap: 20000000000, riskLevel: 0.6 },
  { name: 'Cardano', marketCap: 15000000000, riskLevel: 0.5 },
  { name: 'Polkadot', marketCap: 12000000000, riskLevel: 0.5 },
  // Add more tokens to increase the density of the galaxy
];

const Home: React.FC = () => {
  const [canRender3D, setCanRender3D] = useState(false);
  const [density, setDensity] = useState(1);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    setCanRender3D(true);
    if (window.innerWidth < 768) {
      setDensity(0.5);
      setSpeed(0.5);
    }
  }, []);

  return (
    <Layout>
      <Box bg="brand.background" minH="100vh" position="relative" overflow="hidden">
        {canRender3D && (
          <Box position="absolute" top={0} left={0} right={0} bottom={0}>
            <DynamicTokenGalaxy tokens={sampleTokens} density={density} speed={speed} />
          </Box>
        )}
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" py={20} minHeight="100vh">
            <VStack align="flex-start" spacing={8} maxW="600px">
              <Heading as="h1" size="3xl" color="white">
                DeFi Risk Assessment and Portfolio Optimization
              </Heading>
              <Text fontSize="xl" color="gray.200">
                Explore the DeFi universe, analyze risks, and optimize your portfolio across multiple protocols and chains with advanced tools.
              </Text>
              <Button as={Link} href="/dashboard" size="lg" colorScheme="blue">
                Get Started
              </Button>
            </VStack>
          </Flex>
        </Container>
        <WelcomePopup />
      </Box>
    </Layout>
  )
}

export default Home