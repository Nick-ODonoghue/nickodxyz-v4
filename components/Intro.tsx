import Link from "next/link"
import { SiteIntro } from "@/lib/interface"
import { getIntroData } from "@/sanity/getSanityData"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
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
    <section className=' container mx-auto px-4 flex items-center text-center h-screen'>
      {introData.map((item) => (
        <div key={item._id} className=' '>
          <PortableText value={item.authorBio} components={myPortableTextComponent} />
        </div>
      ))}
    </section>
  )
}
