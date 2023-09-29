import { groq } from "next-sanity"
import { client } from "./lib/client"

export async function getNavData() {
  const query = groq`*[_type == "navbarLinks"] | order(order asc)`
  const data = await client.fetch(query)
  return data
}
