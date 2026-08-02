import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GearboxModel = () => {
  const group = useRef();
  const { scene } = useGLTF("/3d/gearbox_propeller_turbine.glb");

  const normalizedScene = useMemo(() => {
    const s = scene.clone();
    const box = new THREE.Box3().setFromObject(s);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const base = 3.2 / maxDim;
      s.scale.setScalar(base);
      box.setFromObject(s);
      box.getCenter(s.position).multiplyScalar(-1);
    }
    return s;
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={group} rotation={[0.1, 0, 0]}>
      <primitive object={normalizedScene} />
    </group>
  );
};

const Gearbox3D = () => {
  return (
    <Canvas
      camera={{ position: [3, 1.6, 3.4], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} />
      <pointLight position={[0, 3, 4]} intensity={0.8} />
      <Suspense fallback={null}>
        <GearboxModel />
        <ContactShadows position={[0, -1.6, 0]} opacity={0.18} scale={8} blur={3.5} far={3} />
        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={2}
          maxDistance={8}
        />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/3d/gearbox_propeller_turbine.glb");

export default Gearbox3D;
