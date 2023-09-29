import { groq } from "next-sanity"
import { client } from "./lib/client"

export async function getNavData() {
  const query = groq`*[_type == "navbarLinks"] | order(order asc)`
  const data = await client.fetch(query)
  return data
}
export async function getIntroData() {
  const query = groq`*[_type == "siteIntro"]`
  const data = await client.fetch(query)
  return data
}

export async function getProjectData() {
  const query = groq`*[ _type == "projects"] | order(order asc) {
    ...,
    projectLink[] | order(linkType asc) {
      link,
      linkType
    }
  }`
  const data = await client.fetch(query)
  return data
}
