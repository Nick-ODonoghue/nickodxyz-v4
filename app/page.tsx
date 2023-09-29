import Intro from "@/components/Intro"
import SectionProjects from "@/components/SectionProjects"
import Projects from "@/sanity/projects"

export default function Home() {
  return (
    <main className=''>
      <Intro />
      <SectionProjects />
    </main>
  )
}
