import { Stats, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment } from "@react-three/drei";

export default function App() {
  const gltf = useLoader(GLTFLoader, "./models/gorila.glb");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        <Environment files="./image/forest.exr" background blur={0} />

        <primitive object={gltf.scene} position={[0, 1, -3]} />
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle> */}
        <OrbitControls target={[0, 1, 0]} />

        <Stats />
      </Canvas>
    </div>
  );
}
