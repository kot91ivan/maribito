import Link from "next/link"
import MainContent from "./components/MainContent"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "#"
  },
  {
    name: "Instagram",
    url: "#"
  }
]

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto pt-10 flex flex-col gap-10">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4">
          <Sidebar />
          <MainContent />
        </div>
        <Projects />
      </main>
      <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center bg-container rounded-t-3xl py-10">
        <h2 id="contact" className="font-bold text-5xl md:text-7xl lg:text-[112px] metanaTitle">
          lets collaborate!
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full px-10">
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-3xl lg:text-5xl font-bold">
              Ready to create something <br /> <span className="text-accent">awesome together?</span>
            </h3>

            <button className="bg-accent text-black font-semibold text-xl py-3 px-6 rounded-xl">Contact me</button>
          </div>

          <div className="flex gap-6 md:flex-col md:gap-2">
            {socialLinks.map(link => {
              return (
                <Link key={link.name} href={link.url} className="flex items-center gap-2">
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
      <Analytics />
    </div>
  )
}
