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
    <div className="flex flex-col gap-4">
      <h1 className="text-primaryText font-bold text-6xl p-2">Your Ultimate AR Designer, Developer, Consultant</h1>
      <div className="flex gap-4">
        <div className="grid grid-cols-2 gap-3 w-1/2">
          {statistics.map(stat => {
            return <StatisticItem key={stat.text} value={stat.value} valueText={stat.valueText} text={stat.text} />
          })}
        </div>

        <Container classnames="w-1/2">
          <h2 className="text-primaryText font-bold text-2xl">Transforming Your Visions into Immersive Realities</h2>
          <p className="text-secondaryText">
            Say goodbye to the challenges of working with uninspired developers. Partner with an AR expert who combines cutting-edge
            technology, creative brilliance, and a passion for storytelling to craft experiences that captivate, engage, and elevate your
            brand. Let&apos;s make your AR dreams a stunning reality.
          </p>
        </Container>
      </div>

      <div className="flex gap-4 w-full">
        <FeaturedProjects />

        <Container title="Trusted by" classnames="w-1/2">
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
