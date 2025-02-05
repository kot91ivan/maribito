import Image from "next/image"

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
    <div className="bg-container p-10 rounded-3xl hidden md:flex flex-col gap-10 min-w-72">
      <div className="flex flex-col items-center gap-3">
        <div className="w-36 h-36 bg-slate-100 rounded-full overflow-hidden">
          <Image
            className="w-full h-full object-cover object-[0px_0px]"
            src="/images/smile.jpg"
            width={100}
            height={100}
            alt="Avatar image"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-primaryText font-black text-2xl">Yehor Yehorkin</h2>
          <p className="text-secondaryText font-medium text-base text-center">Immersive Experience Creator</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 font-medium text-lg">
        {links.map(link => {
          return (
            <a key={link.link} href={`#${link.link}`} className="hover:text-accent transition-colors">
              {link.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
