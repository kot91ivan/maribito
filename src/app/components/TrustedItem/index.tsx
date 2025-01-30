"use client"

import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"

type TrustedItemProps = {
  name: string
}

const TrustedItem: React.FC<TrustedItemProps> = ({ name }) => {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (innerRef.current) {
      VanillaTilt.init(innerRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5
      })
    }
    return () => {
      innerRef.current?.vanillaTilt?.destroy()
    }
  }, [])

  return (
    <div ref={innerRef} className="text-primaryText bg-innerContainer rounded-2xl text-xl font-semibold px-6 py-4">
      {name}
    </div>
  )
}

export default TrustedItem
