import React from "react";
import iceberg from "../assets/fonts/Iceberg_Regular.json";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

export default function SolarText({ text, position }) {


    const font = new FontLoader().parse(iceberg);

    return (
        <mesh rotation={[0, 0, 0]} position={position} >
            <textGeometry args={[text, { font, size: 5, height: 1 }]} />
            <meshBasicMaterial attach="material" color="orange" />
        </mesh>
    );
}