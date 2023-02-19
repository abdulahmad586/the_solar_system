import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import earth from '../assets/textures/earth_texture.jpg';
import mars from '../assets/textures/mars_texture.jpg';
import mercury from '../assets/textures/mercury_texture.jpg';
import venus from '../assets/textures/venus_texture.jpg';
import jupiter from '../assets/textures/jupiter_texture.jpg';
import saturn from '../assets/textures/saturn_texture.jpg';
import uranus from '../assets/textures/uranus_texture.jpg';
import neptune from '../assets/textures/neptune_texture.jpg';
import pluto from '../assets/textures/pluto_texture.jpg';



export function Mercury({ position, size }) {

    const texture = useLoader(TextureLoader, mercury);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Venus({ position, size }) {

    const texture = useLoader(TextureLoader, venus);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Earth({ position, size }) {

    const texture = useLoader(TextureLoader, earth);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Mars({ position, size }) {

    const texture = useLoader(TextureLoader, mars);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Jupiter({ position, size }) {

    const texture = useLoader(TextureLoader, jupiter);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} color={'orange'} />
        </mesh>
    );
}

export function Saturn({ position, size }) {

    const texture = useLoader(TextureLoader, saturn);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Uranus({ position, size }) {

    const texture = useLoader(TextureLoader, uranus);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Neptune({ position, size }) {

    const texture = useLoader(TextureLoader, neptune);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}

export function Pluto({ position, size }) {

    const texture = useLoader(TextureLoader, pluto);

    return (
        <mesh position={position}>
            <sphereBufferGeometry attach="geometry" args={[size, 30, 30]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}