import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Shape({ position, color, shape }: { position: [number, number, number]; color: string; shape: 'box' | 'sphere' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const scale = hovered ? 1.2 : 1;

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={[scale, scale, scale]}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {shape === 'box' ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[0.7, 32, 32]} />
      )}
      <meshStandardMaterial color={clicked ? '#ff88cc' : color} />
    </mesh>
  );
}

export default function Interactive3DShape() {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Shape position={[-1.5, 0, 0]} color="#8eb8e5" shape="box" />
        <Shape position={[1.5, 0, 0]} color="#b5e5b8" shape="sphere" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}