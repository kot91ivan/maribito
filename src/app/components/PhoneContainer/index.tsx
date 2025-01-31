"use client"

import { TiltHTMLElement } from "@/app/types"
import Image from "next/image"
import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"

type PhoneContainerProps = {
  isLarge?: boolean
  url: string
  alt: string
}

const PhoneContainer: React.FC<PhoneContainerProps> = ({ isLarge, url, alt }) => {
  const tiltRef = useRef<TiltHTMLElement>(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Максимальный угол наклона
        speed: 300, // Скорость анимации
        glare: true, // Добавить блик
        "max-glare": 0.2 // Интенсивность блика
      })
    }

    return () => {
      tiltRef.current?.vanillaTilt?.destroy()
    }
  }, [])
  return (
    <div className={` ${isLarge ? "scale-100" : "scale-90"} hover:scale-120`}>
      <div ref={tiltRef} className="relative rounded-2xl border-[1px] overflow-hidden">
        <div className="h-[2px] absolute bottom-1 w-8 left-[50%] translate-x-[-50%] opacity-[0.8] rounded-sm bg-white"></div>
        <Image width={100} height={120} src={url} className="w-full h-full" alt="123" />
      </div>
    </div>
  )
}

export default PhoneContainer
