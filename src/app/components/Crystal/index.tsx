"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const Crystal = () => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 // Увеличил скорость вращения
      ref.current.rotation.x += 0.015
    }
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* Увеличил детализацию кристалла */}
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="cyan" metalness={1} roughness={0} emissive={"cyan"} emissiveIntensity={0.5} />
    </mesh>
  )
}

const CrystalScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }} // Приблизил камеру
      shadows
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Crystal />
    </Canvas>
  )
}

export default CrystalScene
