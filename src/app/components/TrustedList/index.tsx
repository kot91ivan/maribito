import Container from "../Container"
import TrustedItem from "../TrustedItem"

const trustedList = ["Simone", "Relocate.me", "Atomic Digital", "Subtropical", "Snapchat"]

const TrustedList = () => {
  return (
    <Container title="Trusted by" classnames="w-1/2">
      <div className="flex flex-wrap gap-4">
        {trustedList.map(name => {
          return <TrustedItem key={name} name={name} />
        })}
      </div>
    </Container>
  )
}

export default TrustedList
