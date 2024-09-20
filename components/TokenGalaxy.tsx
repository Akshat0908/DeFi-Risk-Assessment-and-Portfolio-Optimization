import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface TokenData {
  name: string;
  marketCap: number;
  riskLevel: number;
}

interface TokenGalaxyProps {
  tokens: TokenData[];
  density?: number;
  speed?: number;
}

const TokenGalaxy: React.FC<TokenGalaxyProps> = ({ tokens, density = 1, speed = 1 }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create spheres
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      specular: 0x333333,
      shininess: 30,
      transparent: true,
      opacity: 0.7
    });

    const spheres = tokens.slice(0, Math.floor(tokens.length * density)).map((token, index) => {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
      sphere.position.set(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      );
      const size = Math.max(0.5, Math.min(3, Math.log(token.marketCap) / 10));
      sphere.scale.setScalar(size);
      sphere.material.color.setHSL(0.6 - token.riskLevel * 0.4, 0.5, 0.5);
      scene.add(sphere);
      return sphere;
    });

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 50;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      spheres.forEach(sphere => {
        sphere.rotation.x += 0.005 * speed;
        sphere.rotation.y += 0.005 * speed;
        sphere.position.y += Math.sin(Date.now() * 0.001 * speed + sphere.position.x) * 0.02;
      });
      
      renderer.render(scene, camera);
    }

    animate();

    // Responsive design
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [tokens, density, speed]);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default TokenGalaxy;