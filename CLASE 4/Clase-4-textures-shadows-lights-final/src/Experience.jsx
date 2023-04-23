import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Door/>
        <Floor/>
    </>
}