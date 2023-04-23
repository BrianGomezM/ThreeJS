import { useGLTF } from "@react-three/drei";

export default function Model(){
    const  { nodes, materials } = useGLTF("/static/Hamburger.glb")
    console.log(nodes);
    return(
        <group scale={0.02}>
        <mesh
          geometry={nodes.bottomBun.geometry}
          material={materials.BunMaterial}
        />
        <mesh
          geometry={nodes.meat.geometry}
          material={materials.SteakMaterial}
          position={[0, 2.82, 0]}
        />
        <mesh
          geometry={nodes.cheese.geometry}
          material={materials.CheeseMaterial}
          position={[0, 3.04, 0]}
        />
        <mesh
          geometry={nodes.topBun.geometry}
          material={materials.BunMaterial}
          position={[0, 1.77, 0]}
        />
        </group>
    )
}

useGLTF.preload("/static/Hamburger.glb");
