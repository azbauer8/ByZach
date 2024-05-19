import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
  if (request.method !== "GET") {
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
  console.log("Revalidating...")
  revalidatePath("/", "layout")
  return Response.json({ revalidated: "all" })
}
