import client from "../../tina/__generated__/client"

export async function getProjects() {
  const projectsResponse = await client.queries.projectsConnection()
  return projectsResponse.data.projectsConnection.edges?.map((project) => {
    return {
      slug: project?.node?._sys.filename,
      title: project?.node?.title,
      icon: project?.node?.icon,
      category: project?.node?.category,
    }
  })
}

export async function getProject(fileName: string) {
  return await client.queries.projects({ relativePath: `${fileName}.mdx` })
}
