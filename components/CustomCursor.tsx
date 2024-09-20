import React, { useState, useEffect } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (isTouchDevice()) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkPointer = () => {
      const target = document.elementFromPoint(position.x, position.y);
      setIsPointer(window.getComputedStyle(target as Element).cursor === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkPointer);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkPointer);
    };
  }, [isMounted, position.x, position.y]);

  if (!isMounted) return null;

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        transform={`translate3d(${position.x}px, ${position.y}px, 0)`}
        pointerEvents="none"
        zIndex="9999"
      >
        <Icon
          as={FaEthereum}
          w={isPointer ? "32px" : "24px"}
          h={isPointer ? "32px" : "24px"}
          color="cyan.400"
          filter="drop-shadow(0 0 5px rgba(0, 255, 255, 0.7))"
          transition="all 0.3s ease"
          style={{
            transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.2)' : 'scale(1)'}`,
          }}
        />
      </Box>
      <Box
        position="fixed"
        top={0}
        left={0}
        transform={`translate3d(${position.x}px, ${position.y}px, 0)`}
        pointerEvents="none"
        zIndex="9998"
      >
        <Box
          width="40px"
          height="40px"
          border="2px solid"
          borderColor="cyan.400"
          borderRadius="50%"
          position="fixed"
          top="-20px"
          left="-20px"
          transition="all 0.3s ease"
          opacity={0.5}
          style={{
            transform: isPointer ? 'scale(1.2)' : 'scale(1)',
          }}
        />
      </Box>
    </>
  );
};

export default CustomCursor;