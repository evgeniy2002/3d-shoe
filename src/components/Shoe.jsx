/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/shoe.gltf -o src/components/Shoe.jsx -r public -k 
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { ContextShoe } from '../context/Context';
import { useFrame } from '@react-three/fiber';

export function Shoe(props) {
  const ref = React.useRef();
  const { nodes, materials } = useGLTF('/models/shoe.gltf');

  const { lacesColor, soleColor, stripesColor, meshColor } = React.useContext(ContextShoe);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20,
    );
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        name="shoe"
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={lacesColor.color}
      />
      <mesh
        name="shoe_1"
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={meshColor.color}
      />
      <mesh name="shoe_2" geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh name="shoe_3" geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh
        name="shoe_4"
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={soleColor.color}
      />
      <mesh
        name="shoe_5"
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={stripesColor.color}
      />
      <mesh name="shoe_6" geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh name="shoe_7" geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

useGLTF.preload('/models/shoe.gltf');