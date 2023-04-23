import { OrbitControls, Html, Text, Float, MeshReflectorMaterial} from '@react-three/drei'
import { useSpring } from '@react-spring/core';
import { Perf } from 'r3f-perf'
import { a } from '@react-spring/three';
import Model from './Model'

export default function Experience()
{
    const { x } = useSpring({
        from: { x: -2 },
        to: { x: 2 },
        loop: { reverse: true },
        
      });
    return <>
    
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Float>
        <a.group position-x={x}>
            <Text
                font="./font/bangers-v20-latin-regular.woff"
                fontSize={1}
                color="#ffbb2f"
                position-y={2.5}
                distance={0.5}
                speed={200}
                maxWidth={8}
                textAlign="center"
            >
                Egipto Anubis
            </Text>
            </a.group>
        </Float>
        <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 5 }>
            <planeGeometry />
            <meshStandardMaterial color="#ffbb2f" />
        </mesh>
        <Model/>       
      
    </>
}