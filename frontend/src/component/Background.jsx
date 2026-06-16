import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Float } from "@react-three/drei";
import { useRef } from "react";

function MovingGrid() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.z =
      (state.clock.getElapsedTime() * 2) % 5;
  });

  return (
    <Grid
      ref={ref}
      position={[0, -2, 0]}
      args={[30, 30]}
      cellSize={0.6}
      cellThickness={0.6}
      sectionSize={3}
      sectionThickness={1}
      fadeDistance={40}
      fadeStrength={1}
      infiniteGrid
    />
  );
}

function Blob({ position }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh position={position}>
        <sphereGeometry args={[1.8, 64, 64]} />

        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function Background() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 50,
      }}
      className="bgCanvas"
    >
      <ambientLight intensity={1} />

      <Blob position={[-4, 2, -5]} />
      <Blob position={[4, -2, -3]} />

      <MovingGrid />
    </Canvas>
  );
}