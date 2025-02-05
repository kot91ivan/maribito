import AnimatedNumber from "../AnimatedNumber"

type StatisticItemProps = {
  value?: number
  valueText?: string
  text: string
  hasPlus: boolean
}

const StatisticItem: React.FC<StatisticItemProps> = ({ value, valueText, text, hasPlus }) => {
  return (
    <div className="bg-container px-7 py-6 rounded-2xl flex flex-col justify-center ">
      {value && value > 0 ? (
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-accent font-extrabold text-5xl">
              <AnimatedNumber value={Number(value)} />
              {hasPlus && "+"}
            </h3>
            <span className="text-primaryText font-semibold text-3xl">{valueText}</span>
          </div>
          <p className="text-primaryText font-bold">{text}</p>
        </div>
      ) : (
        <h3 className="text-primaryText font-bold text-2xl">{text}</h3>
      )}
    </div>
  )
}

export default StatisticItem
