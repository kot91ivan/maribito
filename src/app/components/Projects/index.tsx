import Container from "../Container"
import VideoPlayer from "../VideoPlayer"

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
    <Container classnames="flex flex-col items-center py-10">
      <h2 className="text-5xl font-bold">Projects</h2>
      <div className="flex flex-wrap justify-center px-4">
        {videoList.map(video => {
          return <VideoPlayer key={video.name} url={video.url} />
        })}
      </div>
    </Container>
  )
}

export default Projects
