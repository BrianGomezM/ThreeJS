import './styles.css'
import ReactDom from "react-dom/client";
import { Experience } from './Experience';
import { Canvas } from '@react-three/fiber';

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Experience/>
    </Canvas>
  
)