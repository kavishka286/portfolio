import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </main>
  )
}
