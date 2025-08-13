import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Pcgaming from "../../public/Pcgaming";

function Heree() {
  return (
    <div className=" absolute w-[100%] h-[100%] right-0 bottom-0">
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableDamping dampingFactor={0.05} enableZoom={false} />
        <Suspense fallback={null}>
          <group scale={0.3}>
            <Pcgaming />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Heree;
