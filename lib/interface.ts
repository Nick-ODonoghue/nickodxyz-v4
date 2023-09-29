import { PortableTextBlock } from "sanity"

export interface NavbarLinks {
  title: string
  href: string
  order: number
  _id: string
}

export interface SiteIntro {
  siteAuthor: string
  siteAuthorNickname: string
  authorBio: PortableTextBlock[]
  socialLinks: string[]
  _id: string
}

export interface Projects {
  projectTitle: string
  projectOverview: string
  techStack: { tech: string }[]
  projectLink: { link: string; linkType: string }[]
  projectImage: {
    asset: {
      _ref: string
      _type: string
    }
  }
  _id: string
}
