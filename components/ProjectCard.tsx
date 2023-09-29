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
        <div key={project._id} className=' mb-6 shadow-md rounded-md'>
          <div className='relative overflow-hidden rounded-md group'>
            <Image
              src={urlForImage(project.projectImage).url()}
              alt={project.projectTitle}
              width={1920}
              height={1080}
            />
            <div className='absolute h-full w-full bg-black/90 flex items-center justify-center bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md px-2'>
              <p className='text-white font-medium text-center'>{project.projectOverview}</p>
            </div>
          </div>
          <div className=' flex flex-col gap-6 p-4'>
            <h3>{project.projectTitle}</h3>
            <div>
              <h4>Tech Stack</h4>
              <ul className=' flex gap-2'>
                {project.techStack.map((stackItem, index) => (
                  <li key={index} className=' text-white uppercase text-sm font-semibold bg-slate-800 px-4 py-2'>
                    {stackItem.tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Links</h4>
              <ul className=' flex gap-2'>
                {project.projectLink.map((linkItem, index) => (
                  <li key={index}>
                    <a href={linkItem.link} target='_blank' rel='noreferrer'>
                      {linkItem.linkType}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
