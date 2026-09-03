"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function AssemblingShapes() {
  const groupRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const shapes = [
    { position: [1.6, 0.6, 0] as const, geometry: "icosahedron", color: "#7dd3fc" },
    { position: [-1.6, -0.4, 0.6] as const, geometry: "octahedron", color: "#a78bfa" },
    { position: [0, 1.2, -0.8] as const, geometry: "torus", color: "#f472b6" },
    { position: [-0.8, -1.1, -0.4] as const, geometry: "icosahedron", color: "#34d399" },
  ];

  return (
    <group ref={groupRef as never}>
      {shapes.map((shape, index) => (
        <Float key={index} speed={1.4 + index * 0.2} rotationIntensity={1.2} floatIntensity={1.6}>
          <mesh position={shape.position}>
            {shape.geometry === "icosahedron" && <icosahedronGeometry args={[0.55, 0]} />}
            {shape.geometry === "octahedron" && <octahedronGeometry args={[0.6, 0]} />}
            {shape.geometry === "torus" && <torusGeometry args={[0.5, 0.18, 16, 32]} />}
            <MeshDistortMaterial
              color={shape.color}
              distort={0.35}
              speed={2}
              roughness={0.2}
              metalness={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#a78bfa" />
      <AssemblingShapes />
    </Canvas>
  );
}
