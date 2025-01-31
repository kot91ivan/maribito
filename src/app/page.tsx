import MainContent from "./components/MainContent"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4">
          <Sidebar />
          <MainContent />
        </div>
        <Projects />
        <div></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h2></h2>
      </footer>
      <Analytics />
    </div>
  )
}
