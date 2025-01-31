type TrustedItemProps = {
  name: string
}

const TrustedItem: React.FC<TrustedItemProps> = ({ name }) => {
  return <div className="text-primaryText bg-innerContainer rounded-2xl text-xl font-semibold px-6 py-4">{name}</div>
}

export default TrustedItem
