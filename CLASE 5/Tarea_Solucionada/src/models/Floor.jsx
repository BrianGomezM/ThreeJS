//Para hacer el suelo
export default function Floor() {

    //receiveShadow recibe la sombra
    return (
        <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } receiveShadow>
            <planeGeometry args={[6,6]} />
            <meshStandardMaterial color="gray" />            
        </mesh>
    )
}