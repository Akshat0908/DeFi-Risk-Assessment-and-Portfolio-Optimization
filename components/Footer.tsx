import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="brand.secondary" color="brand.text.primary" py={8}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <VStack align={{ base: 'center', md: 'flex-start' }} mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" color="brand.text.primary">DeFi Risk Platform</Text>
            <Text color="brand.text.secondary">© 2023 All rights reserved</Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer