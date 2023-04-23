import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import FoxModel from './FoxModel'

export default function Experience() {
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <FoxModel scale={0.02} />
    </>
}