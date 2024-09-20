import { Box, Container, Heading, Text, VStack, Grid, GridItem, Link, HStack, Icon } from '@chakra-ui/react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import Layout from '../components/Layout'
import DeFiChatbot from '../components/DeFiChatbot'

const ChatbotPage: React.FC = () => {
  return (
    <Layout>
      <Box minH="100vh" bg="brand.background" color="brand.text.primary">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={6} align="stretch">
            <Heading as="h1" size="2xl" mb={2}>DeFi Chatbot</Heading>
            <Text fontSize="xl" mb={6}>
              Get instant answers to your DeFi questions and explore the world of decentralized finance.
            </Text>
            <Box 
              bg="brand.card" 
              p={6} 
              borderRadius="xl" 
              boxShadow="xl"
              height="600px"
            >
              <DeFiChatbot />
            </Box>
            <Text fontSize="md" mt={4}>
              This chatbot is designed to provide information about DeFi concepts, protocols, and general statistics. 
              Feel free to ask questions about specific DeFi terms, risk assessment, or current market trends.
            </Text>
          </VStack>
        </Container>

        {/* Updated Contact Section with Indian Details */}
        <Box 
          bgGradient="linear(to-r, brand.secondary, brand.primary)" 
          color="white" 
          py={16} 
          mt={16}
          boxShadow="xl"
        >
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb={8} textAlign="center">Contact us</Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={12}>
              <GridItem>
                <VStack align="start" spacing={4}>
                  <Heading as="h3" size="md" color="brand.accent">Main Office</Heading>
                  <Text>Mumbai</Text>
                  <Text>contact@defiriskplatform.in</Text>
                  <Text>+91 22 1234 5678</Text>
                  <Text>123 Nariman Point, Mumbai, Maharashtra 400021</Text>
                  <Link 
                    color="brand.accent" 
                    href="#" 
                    fontWeight="bold"
                    _hover={{ color: "white", textDecoration: "underline" }}
                  >
                    See on map
                  </Link>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={4}>
                  <Heading as="h3" size="md" color="brand.accent">Tech Hub</Heading>
                  <Text>Bangalore</Text>
                  <Text>tech@defiriskplatform.in</Text>
                  <Text>+91 80 9876 5432</Text>
                  <Text>456 Koramangala, Bangalore, Karnataka 560034</Text>
                  <Link 
                    color="brand.accent" 
                    href="#" 
                    fontWeight="bold"
                    _hover={{ color: "white", textDecoration: "underline" }}
                  >
                    See on map
                  </Link>
                </VStack>
              </GridItem>
            </Grid>
            <VStack mt={12} spacing={4} align="center">
              <Link 
                color="brand.accent" 
                href="#" 
                fontSize="lg" 
                fontWeight="bold"
                _hover={{ color: "white", textDecoration: "underline" }}
              >
                Subscribe to our newsletter
              </Link>
              <Text mt={4} mb={2} fontSize="lg">Connect with us</Text>
              <HStack spacing={6}>
                <Link href="#" aria-label="Twitter">
                  <Icon as={FaTwitter} w={8} h={8} _hover={{ color: "brand.accent" }} />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Icon as={FaLinkedin} w={8} h={8} _hover={{ color: "brand.accent" }} />
                </Link>
                <Link href="#" aria-label="GitHub">
                  <Icon as={FaGithub} w={8} h={8} _hover={{ color: "brand.accent" }} />
                </Link>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}

export default ChatbotPage