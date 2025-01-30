"use client"

import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Model() {
  const { scene } = useGLTF("/models/scene.gltf")
  scene.rotation.set(0, Math.PI, 0)
  return <primitive object={scene} />
}

export default function Scene() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      {/* <directionalLight position={[10, 10, 5]} /> */}
      <directionalLight position={[2, 2, 5]} intensity={1} /> {/* Свет спереди */}
      <directionalLight position={[-2, -2, -5]} intensity={0.5} />
      <Model />
      <OrbitControls
        enableZoom={true} // Включить/выключить приближение
        // minDistance={2} // Минимальное расстояние
        // maxDistance={10} // Максимальное расстояние
        target={[0, 0, 0]} // Точка, на которую смотрит камера
      />
    </Canvas>
  )
}
