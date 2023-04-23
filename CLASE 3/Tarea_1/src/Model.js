import { useLoader} from '@react-three/fiber';
import { useAnimations, useTexture   } from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


export default function model (){
  
  const fbx = useLoader(FBXLoader, '/static/Anubis_VRay.FBX');
  const texture = useTexture('/static/Textures/Anubis_Base_Color.png');

  console.log(fbx)
  const animations = useAnimations(fbx.animations, fbx.scene)
  console.log(animations)
  fbx.traverse((child) => {
    if (child.isMesh) {
      //child.material.color.set(0xFFFFFF); // Color Blanco a nuestra modelo 3d
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });
    return <primitive object={fbx} 
    scale={0.005}
    position={[0, 0, 0.5]}
    rotation-y={0.05}
    />
}

