type ContainerProps = {
  title?: string
  classnames?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ title, classnames, children }) => {
  return (
    <div className={`${classnames} bg-container rounded-3xl p-6 flex flex-col gap-8`}>
      {title && <h1 className="text-3xl text-center font-bold text-primaryText">{title}</h1>}
      {children}
    </div>
  )
}

export default Container
