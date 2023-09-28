export default {
  name: "navbarLinks",
  title: "Navbar Links",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the link",
    },
    {
      name: "href",
      title: "URL",
      type: "string",
      description: "The URL of the link",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "The order of the links displayed in the navbar",
    },
  ],
}
