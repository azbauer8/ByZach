import client from "../../tina/__generated__/client"

export async function getProjects(limit?: number) {
  const projectsResponse = await client.queries.projectsConnection({
    first: limit ?? undefined,
  })
  return projectsResponse.data.projectsConnection.edges?.map((project) => {
    return {
      slug: project?.node?._sys.filename,
      title: project?.node?.title,
      category: project?.node?.category,
      link: project?.node?.link,
    }
  })
}

export async function getProject(fileName: string) {
  const project = await client.queries.projects({
    relativePath: `${fileName}.mdx`,
  })
  return project.data.projects
}

export async function getThoughts(limit?: number) {
  const thoughtsResponse = await client.queries.thoughtsConnection({
    first: limit ?? undefined,
  })
  return thoughtsResponse.data.thoughtsConnection.edges?.map((thought) => {
    return {
      slug: thought?.node?._sys.filename,
      title: thought?.node?.title,
      createdAt: thought?.node?.createdAt,
    }
  })
}

export async function getThought(fileName: string) {
  const thought = await client.queries.thoughts({
    relativePath: `${fileName}.mdx`,
  })
  return thought.data.thoughts
}

export async function getDiscoveries(limit?: number) {
  const discoveriesResponse = await client.queries.discoveriesConnection({
    first: limit ?? undefined,
  })
  return discoveriesResponse.data.discoveriesConnection.edges?.map(
    (discovery) => {
      return {
        slug: discovery?.node?._sys.filename,
        title: discovery?.node?.title,
        link: discovery?.node?.link,
        category: discovery?.node?.category,
      }
    }
  )
}

export async function getDiscovery(fileName: string) {
  const discovery = await client.queries.discoveries({
    relativePath: `${fileName}.json`,
  })
  return discovery.data.discoveries
}

export async function getUses(limit?: number) {
  const usesResponse = await client.queries.usesConnection({
    first: limit ?? undefined,
  })
  return usesResponse.data.usesConnection.edges?.map((use) => {
    return {
      slug: use?.node?._sys.filename,
      title: use?.node?.title,
      category: use?.node?.category,
    }
  })
}

export async function getUse(fileName: string) {
  const use = await client.queries.uses({ relativePath: `${fileName}.mdx` })
  return use.data.uses
}
