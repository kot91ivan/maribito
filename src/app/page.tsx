import MainContent from "./components/MainContent"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto pt-10 flex flex-col gap-12">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start">
        <div className="flex gap-4">
          <Sidebar />
          <MainContent />
        </div>
        <Projects />
      </main>

      <Footer />

      <Analytics />
    </div>
  )
}
