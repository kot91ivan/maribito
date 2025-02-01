import Container from "../Container"
import FeaturedProjects from "../FeaturedProjects"
import StatisticItem from "../StatisticItem"
import TrustedItem from "../TrustedItem"

const trustedList = ["Simone", "Relocate.me", "Atomic Digital", "Subtropical", "Snapchat"]
const statistics = [
  {
    text: "Auguen Reality Creator"
  },
  {
    value: "300+",
    valueText: "",
    text: "Completed projects"
  },
  {
    value: "2+",
    valueText: "billions",
    text: "Views"
  },
  {
    value: "8",
    valueText: "years",
    text: "Creation experience"
  }
]

const MainContent = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-4">
      <h1 className="text-primaryText font-bold text-4xl md:text-5xl p-2 metanaTitle">Your Ultimate AR Designer, Developer, Consultant</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="grid md:grid-cols-2 gap-3 md:w-1/2">
          {statistics.map(stat => {
            return <StatisticItem key={stat.text} value={stat.value} valueText={stat.valueText} text={stat.text} />
          })}
        </div>

        <Container classnames="md:w-1/2">
          <h2 className="text-primaryText font-bold text-2xl">Transforming Your Visions into Immersive Realities</h2>
          <p className="text-secondaryText">
            Say goodbye to the challenges of working with uninspired developers. Partner with an AR expert who combines cutting-edge
            technology, creative brilliance, and a passion for storytelling to craft experiences that captivate, engage, and elevate your
            brand. Let&apos;s make your AR dreams a stunning reality.
          </p>
        </Container>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-4 w-full">
        <FeaturedProjects />

        <Container title="Trusted by" classnames="md:w-1/2">
          <div className="flex flex-wrap gap-4">
            {trustedList.map(name => {
              return <TrustedItem key={name} name={name} />
            })}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MainContent
