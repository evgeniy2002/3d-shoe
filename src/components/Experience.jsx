import {
  ContactShadows,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import { Shoe } from './Shoe';
import { Suspense } from 'react';

export const Experience = () => {
  return (
    <>
      {/* <Stage environment="city" intensity={0.6} castShadow={false}> */}
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
      <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      {/* </PresentationControls> */}
    </>
  );
};
