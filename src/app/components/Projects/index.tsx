"use client"

import Container from "../Container"
import VideoPlayer from "../VideoPlayer"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const videoList = [
  {
    name: "Crocodile",
    url: "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Crocodile-j82Y2cnvZGdZ7HvofKlSPgxlpFDJfU.mp4"
  },
  {
    name: "Destiny",
    url: "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Destiny-NZwzaxY41ePEjgl2JxrYpMK8FJYzDU.mp4"
  },
  {
    name: "Dragon",
    url: "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Dragon-Wre2FkYDzhiclzHWLrtMPJbaxHgKIQ.mp4"
  },
  {
    name: "Fairy_hat",
    url: "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Fairy_hat-X41wcJXjrenUtRoICRTTy2VaIaezAb.mp4"
  },
  {
    name: "Godzilla",
    url: "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Godzilla-kydoZxb8AyNIqVh53sR7VIsw360E5R.mp4"
  },
  {
    name: "Nike_out",
    url: "https://pceklg80jm8q5ywe.public.blob.vercel-storage.com/Nike_out-wgoYC0r2eyZqG6qx5RNz6ABpllahD3.mp4"
  }
]

const Projects = () => {
  return (
    <Container classnames="flex flex-col items-center py-10 w-full">
      <h2 id="projects" className="text-5xl font-bold">
        Projects
      </h2>
      {/* <div className="flex flex-wrap gap-4 md:gap-0 justify-center px-4">
        {videoList.map(video => {
          return <VideoPlayer key={video.name} url={video.url} />
        })}
      </div> */}

      <Swiper
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        className="w-full"
      >
        {videoList.map(video => {
          return (
            <SwiperSlide key={video.name}>
              <VideoPlayer url={video.url} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Projects
