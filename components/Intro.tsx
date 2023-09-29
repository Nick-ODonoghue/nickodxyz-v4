import Link from "next/link"
import { SiteIntro } from "@/lib/interface"
import { getIntroData } from "@/sanity/getSanityData"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { urlForImage } from "@/sanity/lib/image"

const myPortableTextComponent = {
  types: {
    Image: ({ value }: { value: any }) => {
      return (
        <Image
          src={urlForImage(value.asset._ref).url()}
          alt={value.alt}
          className=' rounded-xl'
          width={360}
          height={360}
        />
      )
    },
  },
}

export default async function Intro() {
  const introData = (await getIntroData()) as SiteIntro[]

  if (!introData) return <div>Loading...</div>

  return (
    <section>
      {introData.map((item) => (
        <div key={item._id} className=' container mx-auto px-4 flex flex-col justify-center items-center text-center'>
          <div className=' prose-h2:text-6xl prose-h2:font-bold prose-p:text-5xl prose-p:text-purple-600 prose-headings:mb-6 prose-p:mb-10'>
            <PortableText value={item.authorBio} components={myPortableTextComponent} />
          </div>
          <div className=' flex flex-row justify-center gap-6 text-6xl'>
            <a href={item.socialLinks[0]} target='_blank'>
              <AiFillLinkedin className='' />
            </a>
            <a href={item.socialLinks[1]} target='_blank'>
              <AiFillGithub className='' />
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
