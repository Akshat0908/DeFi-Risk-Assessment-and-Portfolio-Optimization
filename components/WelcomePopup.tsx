import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Heading, Text, VStack, HStack, Progress, Icon, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaRobot, FaNetworkWired } from 'react-icons/fa';
import * as THREE from 'three';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('hideWelcomePopup') !== 'true') {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      // Simulating getting user's name - replace with actual logic if available
      setUserName('User');
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible && canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(300, 300);

      const nodes = [];
      const lines = [];
      const particleSystem = new THREE.Points();

      // Create nodes
      for (let i = 0; i < 20; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const node = new THREE.Mesh(geometry, material);
        node.position.set(
          Math.random() * 4 - 2,
          Math.random() * 4 - 2,
          Math.random() * 4 - 2
        );
        scene.add(node);
        nodes.push(node);
      }

      // Create lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position]);
          const material = new THREE.LineBasicMaterial({ color: 0x0088aa, transparent: true, opacity: 0.3 });
          const line = new THREE.Line(geometry, material);
          scene.add(line);
          lines.push(line);
        }
      }

      // Create particle system
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCnt = 1000;
      const posArray = new Float32Array(particlesCnt * 3);
      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        transparent: true,
        opacity: 0.8,
        color: 0x00ffff,
      });
      particleSystem.geometry = particlesGeometry;
      particleSystem.material = particlesMaterial;
      scene.add(particleSystem);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        nodes.forEach(node => {
          node.rotation.x += 0.01;
          node.rotation.y += 0.01;
        });
        particleSystem.rotation.x += 0.001;
        particleSystem.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        scene.remove(particleSystem);
        nodes.forEach(node => scene.remove(node));
        lines.forEach(line => scene.remove(line));
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('hideWelcomePopup', 'true');
    setIsVisible(false);
  };

  const steps = [
    { icon: FaChartLine, text: "Analyze DeFi Risks" },
    { icon: FaShieldAlt, text: "Optimize Your Portfolio" },
    { icon: FaRobot, text: "AI-Powered Insights" },
    { icon: FaNetworkWired, text: "Multi-Chain Analysis" },
  ];

  const bgGradient = useColorModeValue(
    'linear(to-r, rgba(13, 18, 38, 0.8), rgba(13, 18, 38, 0.9))',
    'linear(to-r, rgba(13, 18, 38, 0.9), rgba(13, 18, 38, 1))'
  );

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          backdropFilter="blur(10px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1000}
        >
          <Box
            bg={bgGradient}
            borderRadius="20px"
            p={8}
            textAlign="center"
            color="white"
            boxShadow="0 0 40px rgba(0, 136, 170, 0.4)"
            border="1px solid rgba(255, 255, 255, 0.1)"
            maxWidth="600px"
            width="90%"
          >
            <VStack spacing={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Heading size="xl" bgGradient="linear(to-r, cyan.400, blue.500)" bgClip="text">
                  Welcome to the Future of DeFi, {userName}!
                </Heading>
              </motion.div>
              <Box width="300px" height="300px">
                <canvas ref={canvasRef} />
              </Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Text fontSize="lg">Explore risks, optimize your portfolio, and navigate the decentralized future with cutting-edge tools and insights.</Text>
              </motion.div>
              <HStack spacing={4} justify="center">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: currentStep === index ? 1 : 0.5, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <VStack>
                      <Icon as={step.icon} w={8} h={8} color="cyan.400" />
                      <Text fontSize="sm">{step.text}</Text>
                    </VStack>
                  </motion.div>
                ))}
              </HStack>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Progress value={(currentStep + 1) * 25} width="100%" colorScheme="cyan" borderRadius="full" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  colorScheme="cyan"
                  size="lg"
                  width="200px"
                  onClick={() => {
                    if (currentStep < steps.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      handleClose();
                    }
                  }}
                >
                  {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
                </Button>
              </motion.div>
              <Button variant="ghost" onClick={handleDismiss} size="sm">Don't show again</Button>
            </VStack>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomePopup;