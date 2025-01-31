"use client"

import { useRef, useState } from "react"

type VideoPlayerProps = {
  url?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

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
    <div className="overflow-hidden relative rounded-2xl border-[1px] transform scale-100 md:scale-90 md:hover:scale-100 transition-transform delay-300 basis-auto sm:basis-[45%] md:basis-[30%]">
      <div className="h-[4px] absolute bottom-2 w-[20%] left-[50%] translate-x-[-50%] opacity-[0.8] rounded-sm bg-white"></div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-auto ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
        autoPlay
        loop
        muted
        playsInline
        onClick={toggleFullscreen}
        onPlaying={() => setIsLoading(false)}
      >
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
