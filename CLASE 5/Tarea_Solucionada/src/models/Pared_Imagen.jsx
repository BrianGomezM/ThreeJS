
import React, {useState, useRef } from 'react';
import {Plane, useTexture} from '@react-three/drei';
export function Pared_Imagen() {
  const paredRef = useRef(null)

  const images = ["/Imagenes/gato.jpg", "/Imagenes/oveja.jpg", "/Imagenes/leon.jpg"];
  const [imagenPared, setImagenPared] = useState(0);
  const textureImagenes = useTexture(images[imagenPared]);
  

  function onPareIMG() {
    setImagenPared((imagenPared + 1) % images.length);
  }


   return (
      <group ref={paredRef} onClick={onPareIMG}>
      <Plane 
        
        args={[5, 3]}  
        rotation={[Math.PI / 1, 0, 3.1]}
        position={[0, 1.5, 2]} 
        color="#000000" 
        
      >
        <meshStandardMaterial map={textureImagenes}/>
      </Plane>
      </group>
    );
   
}
export default Pared_Imagen;