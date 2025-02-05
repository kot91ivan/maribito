"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

const AnimatedNumber = ({ value }: { value: number }) => {
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 100, damping: 25 }) // Плавная анимация
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    count.set(value) // Запускаем анимацию
  }, [value, count])

  useEffect(() => {
    const unsubscribe = spring.on("change", latest => {
      setDisplayValue(Math.round(latest)) // Обновляем число в state
    })

    return () => unsubscribe() // Очищаем слушатель
  }, [spring])

  return <motion.span className="font-extrabold text-5xl">{displayValue}</motion.span>
}

export default AnimatedNumber
