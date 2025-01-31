import Container from "../Container"
import VideoPlayer from "../VideoPlayer"

const Projects = () => {
  return (
    <Container title="Projects" classnames="">
      <div className="flex  px-8">
        <VideoPlayer url="/videos/Crocodile.mp4" />
        <VideoPlayer url="/videos/Destiny.mp4" />
        <VideoPlayer url="/videos/Dragon.mp4" />
        <VideoPlayer url="/videos/Fairy_hat.mp4" />
        <VideoPlayer url="/videos/Godzilla.mp4" />
        <VideoPlayer url="/videos/Nike_out.mp4" />
      </div>
    </Container>
  )
}

export default Projects
