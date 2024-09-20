import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/Layout'
import AIChatbot from '../components/AIChatbot'

const ChatbotPage: React.FC = () => {
  return (
    <Layout>
      <Box minH="100vh" bg="brand.background" color="brand.text.primary">
        <Container maxW="container.xl" py={8}>
          <Heading as="h1" size="xl" mb={6}>AI Chatbot</Heading>
          <AIChatbot />
        </Container>
      </Box>
    </Layout>
  )
}

export default ChatbotPage