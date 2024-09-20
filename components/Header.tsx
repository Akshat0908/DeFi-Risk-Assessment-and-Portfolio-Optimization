import { useState, useEffect, useCallback } from 'react';
import { Box, Button, Container, Flex, HStack, Image, Link as ChakraLink, Text, useToast } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../lib/connectors'

const Header: React.FC = () => {
  const { active, account, activate, deactivate, error } = useWeb3React()
  const [isConnecting, setIsConnecting] = useState(false)
  const toast = useToast()

  useEffect(() => {
    console.log('Web3React state:', { active, account, error })
  }, [active, account, error])

  const handleError = useCallback((error: Error) => {
    console.error('Connection error:', error)
    toast({
      title: "Connection Error",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    })
    setIsConnecting(false)
  }, [toast])

  const connect = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      toast({
        title: "MetaMask not detected",
        description: "Please install MetaMask to connect your wallet.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsConnecting(true)
    try {
      console.log('Attempting to connect...')
      await activate(injected, undefined, true)
      localStorage.setItem('isWalletConnected', 'true')
      console.log('Wallet connected successfully')
      toast({
        title: "Wallet connected",
        description: "Your wallet has been successfully connected.",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Failed to connect:', error)
      handleError(error)
    } finally {
      console.log('Connection attempt finished')
      setIsConnecting(false)
    }
  }, [activate, toast, handleError])

  const disconnect = useCallback(async () => {
    try {
      await deactivate()
      localStorage.removeItem('isWalletConnected')
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected.",
        status: "info",
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Failed to disconnect:', error)
      handleError(error)
    }
  }, [deactivate, toast, handleError])

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        setIsConnecting(true)
        try {
          await activate(injected, undefined, true)
        } catch (error) {
          console.error('Failed to connect to wallet:', error)
          handleError(error)
        } finally {
          setIsConnecting(false)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [activate, handleError])

  console.log('Render state:', { active, isConnecting, account })

  return (
    <Box 
      as="header" 
      bg="brand.secondary" 
      py={4} 
      boxShadow="0 2px 10px rgba(0,0,0,0.1)"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <NextLink href="/" passHref legacyBehavior>
            <ChakraLink>
              <Image 
                src="/openart-image_-XxDva_L_1726638123134_raw.png"
                alt="DeFi Risk Platform Logo" 
                height={{ base: "30px", md: "40px" }} 
                objectFit="contain"
                mr={4}
              />
            </ChakraLink>
          </NextLink>
          <HStack spacing={{ base: 4, md: 8 }}>
            <NextLink href="/tutorial" passHref legacyBehavior>
              <ChakraLink color="brand.text.primary" fontSize={{ base: "sm", md: "md" }} fontWeight="medium" _hover={{ color: "brand.accent" }}>Tutorial</ChakraLink>
            </NextLink>
            <NextLink href="/defi-chatbot" passHref legacyBehavior>
              <ChakraLink color="brand.text.primary" fontSize={{ base: "sm", md: "md" }} fontWeight="medium" _hover={{ color: "brand.accent" }}>DeFi Chatbot</ChakraLink>
            </NextLink>
            {active ? (
              <HStack>
                <Text color="brand.text.secondary">{account && `${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</Text>
                <Button 
                  onClick={disconnect}
                  size="sm"
                >
                  Disconnect
                </Button>
              </HStack>
            ) : (
              <Button 
                onClick={connect}
                isLoading={isConnecting}
                loadingText="Connecting..."
                size="sm"
                disabled={isConnecting}
              >
                Connect Wallet
              </Button>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header