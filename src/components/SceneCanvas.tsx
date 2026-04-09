import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Sphere,
  Stars,
  TorusKnot,
} from "@react-three/drei";
import type { Group, Mesh } from "three";

function SceneCluster() {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const shardOneRef = useRef<Mesh>(null);
  const shardTwoRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.18 + state.pointer.x * 0.35;
      groupRef.current.rotation.x = state.pointer.y * 0.18;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.3;
      coreRef.current.rotation.y -= delta * 0.45;
    }

    if (shardOneRef.current) {
      shardOneRef.current.rotation.z += delta * 0.25;
      shardOneRef.current.position.y = 1.45 + Math.sin(elapsed * 1.4) * 0.18;
    }

    if (shardTwoRef.current) {
      shardTwoRef.current.rotation.x -= delta * 0.28;
      shardTwoRef.current.position.y = -1.3 + Math.cos(elapsed * 1.1) * 0.16;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <TorusKnot ref={coreRef} args={[1, 0.28, 240, 24, 3, 4]}>
          <MeshDistortMaterial
            color="#ff9b71"
            emissive="#ff7d4d"
            emissiveIntensity={0.8}
            roughness={0.18}
            metalness={0.75}
            distort={0.28}
            speed={2.4}
          />
        </TorusKnot>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
        <RoundedBox
          ref={shardOneRef}
          args={[1.2, 1.2, 1.2]}
          radius={0.24}
          position={[-2.3, 1.45, -0.8]}
          rotation={[0.8, 0.5, 0.2]}
        >
          <meshStandardMaterial
            color="#7ae7c7"
            metalness={0.5}
            roughness={0.12}
            opacity={0.82}
            transparent
          />
        </RoundedBox>
      </Float>

      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1}>
        <Sphere ref={shardTwoRef} args={[0.82, 48, 48]} position={[2.2, -1.3, 0.9]}>
          <meshPhysicalMaterial
            color="#7bbcff"
            roughness={0.18}
            transmission={0.7}
            thickness={1.2}
            clearcoat={1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6.8], fov: 42 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#07121c"]} />
      <fog attach="fog" args={["#07121c", 8, 18]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} color="#f7c59f" />
      <pointLight position={[-5, -2, -4]} intensity={1.7} color="#72f1cf" />
      <Stars
        radius={18}
        depth={12}
        count={900}
        factor={4}
        saturation={0}
        fade
        speed={0.8}
      />

      <Suspense fallback={null}>
        <SceneCluster />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} />
    </Canvas>
  );
}
