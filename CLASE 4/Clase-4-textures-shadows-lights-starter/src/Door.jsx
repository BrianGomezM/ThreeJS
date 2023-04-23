import { DoubleSide } from "three";

export default function Door() {
    return (
        <mesh rotation-y={Math.PI / 12}>
            <planeGeometry args={[2, 3]} />
            <meshStandardMaterial side={DoubleSide} />
        </mesh>
    )
}