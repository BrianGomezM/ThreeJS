import ReactDom from 'react-dom/client'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(
  <Canvas onContextMenu={(e) => e.preventDefault()}>
    <Experience/>
  </Canvas>
)