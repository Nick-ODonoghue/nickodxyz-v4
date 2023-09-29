import { type SchemaTypeDefinition } from "sanity"
import navbarLinks from "./navbarLinks"
import siteIntro from "./intro"
import projects from "./projects"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navbarLinks, siteIntro, projects],
}
