import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import sun from '../assets/textures/sun.jpg'

export default function Sun({ position, size }) {

    const sunTexture = useLoader(TextureLoader, sun);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 90, 90]} />
            <meshStandardMaterial emissive={[1, 0.3, 0.2]} attach="material" color="gold" map={sunTexture} />
        </mesh>
    );
}