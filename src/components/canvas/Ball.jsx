import { Decal, Preload, useTexture, OrbitControls, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); //imprime la imagen sobre la ball

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2*Math.PI, Math.PI, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         enableZoom={false}          
         //autoRotate
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;