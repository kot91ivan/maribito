import Image from "next/image"
import Link from "next/link"
import ContactUs from "../ContactUs"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yehor-yehorkin-384344a1/"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ne_egor_egorkin/"
  }
]

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center bg-container rounded-t-3xl py-10">
      <h2 id="contact" className="font-bold text-5xl md:text-7xl lg:text-[112px] metanaTitle">
        lets collaborate!
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full px-10">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-3xl lg:text-5xl font-bold">
            Ready to create something <br /> <span className="text-accent">awesome together?</span>
          </h3>

          <ContactUs />
        </div>

        <div className="flex gap-6 md:flex-col md:gap-2">
          {socialLinks.map(link => {
            return (
              <Link key={link.name} href={link.url} className="flex items-center gap-2 hover:text-hoverAccent hover:underline">
                <Image width={32} height={32} src={`/icons/${link.name}.png`} alt={link.name} />
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center w-full">
        <p>&copy; All copyrights reserved. </p>
        {/* <Link href="#">Created by Ivan Kudriashov</Link> */}
      </div>
    </footer>
  )
}

export default Footer
