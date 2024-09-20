import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface ProtocolSphere {
  name: string;
  allocation: number;
  risk: number;
}

const ProtocolSphere: React.FC<ProtocolSphere> = ({ name, allocation, risk }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const color = new THREE.Color().setHSL(0.6 - risk * 0.5, 1, 0.5);

  return (
    <group>
      <Sphere ref={meshRef} args={[allocation * 0.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} />
      </Sphere>
      <Text
        position={[0, allocation * 0.5 + 0.2, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

interface PortfolioVisualization3DProps {
  protocols: ProtocolSphere[];
}

const PortfolioVisualization3D: React.FC<PortfolioVisualization3DProps> = ({ protocols }) => {
  if (protocols.length === 0) {
    return <div>No data available for visualization</div>;
  }

  return (
    <Canvas style={{ height: '100%', width: '100%', background: '#1a1a1a' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      {protocols.map((protocol, index) => (
        <ProtocolSphere
          key={index}
          {...protocol}
          position={[
            Math.cos(index * (2 * Math.PI / protocols.length)) * 2,
            0,
            Math.sin(index * (2 * Math.PI / protocols.length)) * 2
          ]}
        />
      ))}
    </Canvas>
  );
};

export default PortfolioVisualization3D;