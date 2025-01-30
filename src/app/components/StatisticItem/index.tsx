"use client"

import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"

type StatisticItemProps = {
  value?: string
  valueText?: string
  text: string
}

const StatisticItem: React.FC<StatisticItemProps> = ({ value, valueText, text }) => {
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Максимальный угол наклона
        speed: 400, // Скорость анимации
        glare: true, // Добавить блик
        "max-glare": 0.5 // Интенсивность блика
      })
    }

    return () => {
      tiltRef.current?.vanillaTilt?.destroy() // Убираем эффект при размонтировании
    }
  }, [])
  return (
    <div ref={tiltRef} className="bg-container px-7 py-6 rounded-2xl flex flex-col justify-center ">
      {value && value?.length > 0 ? (
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-accent font-extrabold text-5xl">{value}</h3>
            <span className="text-primaryText font-semibold text-3xl">{valueText}</span>
          </div>
          <p className="text-primaryText font-bold">{text}</p>
        </div>
      ) : (
        <h3 className="text-primaryText font-bold text-2xl">{text}</h3>
      )}
    </div>
  )
}

export default StatisticItem
