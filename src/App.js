import { MapControls, Stars } from "@react-three/drei";
import style from './App.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import SolarText from './objects/text';
import { SolarSystem } from './objects/solar_system';

function App() {

  return (
    <Canvas className={style.canvas} style={{ width: "100vw", height: "100vh" }}>
      <color attach="background" args={['#000']} />
      <MapControls />
      <Stars count={200} depth={10} />
      <ambientLight intensity={0.9} />

      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <SolarText text={"Welcome to my world"} position={[0, 20, 0]} />
      <Suspense fallback={null}>
        <SolarSystem />
      </Suspense>
    </Canvas>
  );
}

export default App;
