import { Center, OrbitControls, Stars, Plane, useTexture} from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from "react";

export  function Experience(){
    const boxRef = useRef()
    const coneRef = useRef();
    const colorTexture = useTexture('./univalle.jpg');
    
    
    const sphereRef = useRef();
    
    const amplitude = 0.5;
    const frequency = 2;
    let   time = 0;
    useFrame(() => {
        // Actualizar la posición vertical de la esfera
        const y = 0 + Math.sin(time * frequency) * amplitude;
        sphereRef.current.position.setY(y);
    
        // Aumentar el tiempo de animación
        time += 0.05;
      });



    let colorFera="";
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
        coneRef.current.rotation.z += 1 * delta;
        if((Math.round(coneRef.current.rotation.z+= 1 * delta) % 10) === 0 ){
            colorFera = "#fff";
        }else{
            colorFera = "#000"; 
        }
    })
   
    
    //const roughnessTexture = textureLoader.load('ruta/a/la/textura_roughness.jpg');
    //<ambientLight color="#ffffff" intensity={0.5} /> 
   return <>
        <OrbitControls 
            enableRotate = {true}
            minDistance = {4}
            maxDistance = {8}
            makeDefault = {true}
            enablePan={false}
        />
        <Stars/>
        <directionalLight color="#ffffff" intensity={1} position={[0, 10, 0]}/>
        <Plane args={[9, 9]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
             <meshStandardMaterial color="#fff" />
        </Plane>
        <directionalLight position={[10, 3, 3]} intensity={1.5} />
        <Center>
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial map={colorTexture}/>
            </mesh>
            <mesh position-z = {-3} ref={sphereRef}>
                <sphereGeometry args={[1, 32, 64]}/>
                <meshStandardMaterial color={colorFera}/>
            </mesh>

            <mesh ref={coneRef} position-z = {-6} >                
                <coneGeometry args={[ 1, 2, 10]}/>
                <meshStandardMaterial color={"#6D0000"}/>
            </mesh>
        </Center>
    </>
    
   
}
