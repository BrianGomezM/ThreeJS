import { FirstPersonControls, PerspectiveCamera  } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './Model'
import Model1 from './Model1'
export default function Experience()
{
    return <>
        <Perf position="top-left" />

        <FirstPersonControls 
            movementSpeed = {100}
            lookSpeed = {0.001}
            lookVertical = {true}
            position={[10, 10, 10]}
            Orientation={[0, 0, 0]}
        ><PerspectiveCamera position={[100, 100, 1000]} />
        </FirstPersonControls>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
  
        <Model1/>
        <Model/>
        <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"></meshStandardMaterial>
        </mesh>
    </>
}