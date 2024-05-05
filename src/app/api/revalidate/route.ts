import { revalidateTag } from "next/cache"

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed.", {
      status: 405,
    })
  }
  const { searchParams } = new URL(request.url)

  // Validate secret.
  const secret = searchParams.get("secret")
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid secret.", {
      status: 400,
    })
  }

  //   Validate slug.
  const slug = searchParams.get("slug")
  if (!slug || (slug !== "cms" && slug !== "raindrop")) {
    return new Response("Invalid slug.", {
      status: 400,
    })
  }
  try {
    revalidateTag(slug)
    return Response.json({ revalidated: slug })
  } catch (error) {
    return new Response("Something went wrong. Please try again later.", {
      status: 404,
    })
  }
}
