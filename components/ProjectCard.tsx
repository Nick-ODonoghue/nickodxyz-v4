import { Projects } from "@/lib/interface"
import Image from "next/image"

import { urlForImage } from "@/sanity/lib/image"

interface ProjectsCardProps {
  projectData: Projects[]
}

export default function ProjectCard({ projectData }: ProjectsCardProps) {
  if (!projectData) return <div>Loading...</div>

  return (
    <>
      {projectData.map((project) => (
        <div key={project._id}>
          <div>
            <Image
              src={urlForImage(project.projectImage).url()}
              alt={project.projectTitle}
              width={1920}
              height={1080}
            />
          </div>
        </div>
      ))}
    </>
  )
}
