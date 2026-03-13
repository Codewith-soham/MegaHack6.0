import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef();
  
  // Custom rotation with mouse interaction
  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y += 0.003;
      
      // Mouse interaction (lerp towards mouse position)
      const mouseX = (state.mouse.x * Math.PI) / 8; // max 22.5 deg tilt
      const mouseY = (state.mouse.y * Math.PI) / 16; // max 11.25 deg tilt
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouseY, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -mouseX * 0.2, 0.05);
    }
  });

  const textureLoader = new THREE.TextureLoader();
  const earthTexture = useMemo(() => {
    // We use a high quality green-dominant generic placeholder texture via canvas generation
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Draw Earth-like pattern with farm greens
    ctx.fillStyle = '#40916C'; // Ocean
    ctx.fillRect(0, 0, 1024, 512);
    
    ctx.fillStyle = '#1B4332'; // Land
    for(let i=0; i<30; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * 1024,
        Math.random() * 512,
        Math.random() * 80 + 20,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group ref={meshRef}>
      {/* Soft atmospheric glow */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          color="#52B788" 
          transparent={true} 
          opacity={0.15} 
          side={THREE.BackSide} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Main globe body */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          map={earthTexture}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Markers for Indian cities (approximate relative positions on the sphere) */}
      {[
        { pos: [1.4, 0.8, 1.2], name: "Delhi" },
        { pos: [1.6, 0.4, 1.1], name: "Mumbai" },
        { pos: [1.8, 0.1, 0.8], name: "Bengaluru" },
        { pos: [1.7, 0.3, 0.9], name: "Pune" },
        { pos: [1.9, 0.5, 0.4], name: "Kolkata" },
        { pos: [1.7, 0.2, 0.6], name: "Chennai" },
      ].map((city, i) => (
        <Html key={i} position={city.pos} center>
          <div className="relative flex items-center justify-center w-4 h-4">
            <div className="absolute w-2 h-2 bg-farm-gold rounded-full z-10"></div>
            <div className="absolute w-full h-full bg-farm-gold rounded-full animate-ping-slow"></div>
          </div>
        </Html>
      ))}
    </group>
  );
};

const GlobeCanvas = () => {
  return (
    <div className="w-full h-[600px] relative cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FDE68A" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#52B788" />
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default GlobeCanvas;
