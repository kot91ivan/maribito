type TrustedItemProps = {
  name: string
}

const TrustedItem: React.FC<TrustedItemProps> = ({ name }) => {
  return <div className="text-primaryText bg-innerContainer rounded-2xl px-3 py-3">{name}</div>
}

export default TrustedItem
