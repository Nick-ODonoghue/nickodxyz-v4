export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      description: "Title of the project",
    },
    {
      name: "projectOverview",
      title: "Project Overview",
      type: "text",
      description: "Overview of the project",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      description: "Tech stack used in the project",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tech",
              title: "Tech",
              type: "string",
              description: "Tech used in the project",
            },
          ],
        },
      ],
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "array",
      description: "The links to the project",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "link",
              title: "Link",
              type: "string",
              description: "The url to the project",
            },
            {
              name: "linkType",
              title: "Link Type",
              type: "string",
              description: "The type of link (e.g. github, website)",
            },
          ],
        },
      ],
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      description: "The image of the project",
    },
  ],
}
