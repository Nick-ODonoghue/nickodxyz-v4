import { type SchemaTypeDefinition } from "sanity"
import navbarLinks from "./navbarLinks"
import siteIntro from "./intro"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navbarLinks, siteIntro],
}
