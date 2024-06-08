import {
  Environment,
  Image,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import "../services/Utils";
import { Canvas, useFrame } from "react-three-fiber";
import { easing } from "maath";

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/game_${Math.floor(i % 10) + 1}.jpg`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture("/logo.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((_, delta) => {
    ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

const HomeBanner = () => {
  return (
    <>
      <div className="w-2/4 h-3/4 max-md:w-full max-md:h-2/4">
        <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
          <fog attach="fog" args={["#e6213b", 8.5, 12]} />
          <ScrollControls pages={10} infinite>
            <Rig rotation={[0, 0, 0.1]}>
              <Carousel />
            </Rig>
            <Banner position={[0, -0.1, 0]} />
          </ScrollControls>
          <Environment preset="dawn" blur={0.5} />
        </Canvas>
      </div>
    </>
  );
};

export default HomeBanner;
