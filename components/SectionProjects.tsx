import ProjectCard from "./ProjectCard"
import { Projects } from "@/lib/interface"
import { getProjectData } from "@/sanity/getSanityData"

export default async function SectionProjects() {
  const projectData = (await getProjectData()) as Projects[]

  if (!projectData) return <div>Loading...</div>

  return (
    <section className=' container mx-auto px-4 pt-28' id='projects'>
      <h2>.projects()</h2>
      <ProjectCard projectData={projectData} />
    </section>
  )
}
