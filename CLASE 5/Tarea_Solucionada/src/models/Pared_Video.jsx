import React, {useRef,useEffect} from 'react';
import { Plane } from '@react-three/drei';
import { useVideoTexture } from '@react-three/drei'

export function Pared_Video() {
  //const texture1 = useVideoTexture("Videos/musica.mp4");
  const texture1 = useVideoTexture("Videos/musica.mp4");
  const paredRef = useRef(null)

  useEffect(() => {
    const video = paredRef.current.children[0].material.map.image;
    video.pause(); 
  }, []);

  function onPareMOD() {
    const video = paredRef.current.children[0].material.map.image;
    if (video.paused) {
      video.play(); 
    } else {
      video.pause(); 
    }
  }
    return (
      <group  ref={paredRef} onClick={onPareMOD}>
        <Plane args={[5, 3]}  rotation={[-Math.PI / 50.9, 0, 0]}position={[0, 1.5, -2]} color="#fafafa" >
          <meshBasicMaterial map={texture1}  />
       </Plane>
        
      </group>
      );
}
export default Pared_Video;