import Container from "../Container"
import PhoneContainer from "../PhoneContainer"

const FeaturedProjects = () => {
  return (
    <Container title="Featured Projects" classnames="md:w-1/2">
      <div className="flex justify-center gap-4">
        <PhoneContainer url="/featured/featured-1.jpg" alt="Croco" />
        <PhoneContainer url="/featured/featured-2.jpg" alt="" isLarge />
        <PhoneContainer url="/featured/featured-3.jpg" alt="" />
      </div>
    </Container>
  )
}

export default FeaturedProjects
