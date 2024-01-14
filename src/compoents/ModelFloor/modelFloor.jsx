import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stage, useProgress } from "@react-three/drei";
import * as THREE from "three";
import Mesh from "../Mesh";

const ModelFloor = ({ sole, stripe, back, top }) => {
  const lightRef = useRef();
  const [progressNum, setprogressNum] = useState(0);

  const { progress } = useProgress();


  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setprogressNum(progress)
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);





  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();

    return <Html center>{Math.floor(progressNum)}%</Html>;
  }

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-1.6, 0.2, 0.1], fov: 7 }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[50, 50, 50]} intensity={4} color="white" />
        <directionalLight
          position={[-50, 50, 50]}
          intensity={4}
          color="white"
        />

        {/* Fill light */}
        <directionalLight
          position={[-50, -50, -50]}
          intensity={3}
          color="white"
        />
        <directionalLight
          position={[50, -50, -50]}
          intensity={3}
          color="white"
        />

        <spotLight
          ref={lightRef}
          color={0xffffff}
          intensity={0}
          position={[0, 0.6, 0]}
          angle={Math.PI * 0.05}
          penumbra={0.01}
          castShadow
          shadow-bias={-0.01}
        // shadow-mapSize={{ width: 512, height: 512 }}
        />

        {/* Ambient light */}
        <ambientLight intensity={0.8} />

        <Mesh sole={sole} stripe={stripe} back={back} top={top} />
        <mesh
          // ref={floorRef}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
          position={[0, -0.0243, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.1} transparent fog={false} />
        </mesh>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelFloor;
