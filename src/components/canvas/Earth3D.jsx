import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const EarthModel = () => {
  const group = useRef();
  const { scene } = useGLTF("/planet/scene.gltf");

  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const normalized = 3.6 / maxDim;
      scene.scale.set(normalized, normalized, normalized);
      box.getCenter(scene.position).multiplyScalar(-1);
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

const Earth3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[-5, 0, 5]} intensity={1.2} />
      <pointLight position={[3, 2, 3]} intensity={0.4} />
      <Suspense fallback={null}>
        <EarthModel />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/planet/scene.gltf");

export default Earth3D;
