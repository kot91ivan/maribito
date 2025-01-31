const links = [
  {
    name: "Projects",
    link: "projects"
  },
  {
    name: "About",
    link: "about"
  },
  {
    name: "Contact",
    link: "contact"
  }
]

const Sidebar = () => {
  return (
    <div className="bg-container p-6 rounded-3xl hidden md:flex flex-col gap-6 min-w-72">
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 bg-slate-100 rounded-full"></div>

        <div className="flex flex-col items-center">
          <h2 className="text-primaryText font-bold text-xl">Yehor Yehorkin</h2>
          <p className="text-secondaryText font-medium text-base">Immersive Experience Creator</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 font-medium text-lg">
        {links.map(link => {
          return (
            <a key={link.link} href={`#${link.link}`}>
              {link.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
