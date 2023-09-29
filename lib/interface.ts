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
