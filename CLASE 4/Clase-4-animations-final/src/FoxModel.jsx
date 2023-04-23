import { useAnimations, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';

export default function FoxModel(props) {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/Fox.glb");
  const { actions, names } = useAnimations(animations, group);

  // Leva
  const { animationName } = useControls({
    animationName: { options: names }
  })

  useEffect(() => {
    const action = actions[animationName]
    action.reset().fadeIn(0.5).play()

    return () => {
      action.fadeOut(0.5)
    }

  }, [animationName])

  return (
    <group ref={group} {...props} dispose={null} >
      <group>
        <group name="root">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Fox.glb");
