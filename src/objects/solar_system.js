import React from "react";
import { Earth, Jupiter, Mars, Mercury, Neptune, Pluto, Saturn, Uranus, Venus } from "./planets";
import Sun from "./sun";

export const SolarSystem = () => {
    return <group>
        <Sun size={10} />
        <Mercury size={0.035} position={[13.5, 0, 0]} />
        <Venus size={0.087} position={[16.7, 0, 0]} />
        <Earth size={0.092} position={[19.3, 0, 0]} />
        <Mars size={0.049} position={[24.2, 0, 0]} />
        <Jupiter size={1.03} position={[58.4, 0, 0]} />
        <Saturn size={0.866} position={[98.9, 0, 0]} />
        <Uranus size={0.37} position={[189, 0, 0]} />
        <Neptune size={0.356} position={[298, 0, 0]} />
        <Pluto size={0.032} position={[377, 0, 0]} />
    </group>
}