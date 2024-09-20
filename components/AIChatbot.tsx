import React, { useState, useRef, useEffect } from 'react';
import { Box, VStack, Input, Button, Text, Spinner, Flex } from '@chakra-ui/react';
import { getDeFiData, getProtocolInfo } from '../lib/apiService';

interface DeFiProtocol {
  name: string;
  tvl: number;
  chain: string;
}

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [protocols, setProtocols] = useState<DeFiProtocol[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getDeFiData().then(setProtocols);
    setMessages([
      { 
        text: "Welcome to the DeFi Assistant! You can ask me about DeFi concepts, specific protocols, or general statistics.", 
        isUser: false 
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isUser: true }]);
      setInput('');
      setIsLoading(true);

      try {
        const response = getProtocolInfo(protocols, input);
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      } catch (error) {
        console.error('Error getting protocol info:', error);
        setMessages(prev => [...prev, { text: "Sorry, I couldn't process your request. Please try again.", isUser: false }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Box height="600px" bg="brand.card" borderRadius="xl" boxShadow="xl" display="flex" flexDirection="column">
      <VStack flex={1} overflowY="auto" spacing={4} align="stretch" p={4}>
        {messages.map((message, index) => (
          <Box key={index} alignSelf={message.isUser ? "flex-end" : "flex-start"} bg={message.isUser ? "brand.primary" : "brand.accent"} color="white" p={3} borderRadius="lg">
            <Text>{message.text}</Text>
          </Box>
        ))}
        {isLoading && <Spinner alignSelf="center" />}
        <div ref={messagesEndRef} />
      </VStack>
      <Flex p={4} borderTop="1px solid" borderColor="brand.accent">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about DeFi..."
          disabled={isLoading}
          bg="brand.background"
          color="white"
          _placeholder={{ color: "brand.text.secondary" }}
          mr={2}
        />
        <Button onClick={handleSendMessage} disabled={isLoading} colorScheme="blue">Send</Button>
      </Flex>
    </Box>
  );
};

export default AIChatbot;