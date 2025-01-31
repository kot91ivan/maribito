"use client"

import { useRef } from "react"

type VideoPlayerProps = {
  url?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleFullscreen = () => {
    console.log("clicked")
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen().catch(err => {
        console.error("Ошибка при входе в полноэкранный режим:", err)
      })
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <div className="overflow-hidden relative rounded-2xl border-[1px] transform scale-90 hover:scale-100 transition-transform delay-300 basis-[30%]">
      <div className="h-[4px] absolute bottom-2 w-[20%] left-[50%] translate-x-[-50%] opacity-[0.8] rounded-sm bg-white"></div>
      <video ref={videoRef} className="w-full h-auto" autoPlay loop muted playsInline onClick={toggleFullscreen}>
        <source
          src={url ? url : "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Crocodile-j82Y2cnvZGdZ7HvofKlSPgxlpFDJfU.mp4"}
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  )
}

export default VideoPlayer
