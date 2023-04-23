import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Banana from './models/Banana'
import Lemon from './models/Lemon'
import { Hamburger } from './models/Hamburguer'
import  Pared_Video from './models/Pared_Video'
import Pared_Imagen from './models/Pared_Imagen'
import Floor from './models/Floor'
export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <Floor/>
        <Pared_Video/>
        <Pared_Imagen/>
    </>
}