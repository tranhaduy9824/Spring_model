/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/carousel/model.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const CarouselModel = (props) => {
  const { nodes, materials } = useGLTF("/models/carousel/model.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 4, 0]}>
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Zone1}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.Zone2}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={materials.Zone3}
        />
        <mesh
          geometry={nodes.Cylinder001_4.geometry}
          material={materials.Zone4}
        />
        <mesh
          geometry={nodes.Cylinder001_5.geometry}
          material={materials.Base}
        />
      </group>
      <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Zone2} />
      <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Zone1} />
      <mesh geometry={nodes.Cylinder_3.geometry} material={materials.Zone3} />
      <mesh geometry={nodes.Cylinder_4.geometry} material={materials.Zone4} />
      <mesh geometry={nodes.Cylinder_5.geometry} material={materials.Base} />
    </group>
  );
};

export default CarouselModel;

useGLTF.preload("/models/carousel/model.gltf");
