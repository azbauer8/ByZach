import { revalidatePath } from "next/cache"
import arcjet, { fixedWindow } from "@arcjet/next"

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

  // rate-limiting
  const decision = await aj.protect(request)
  console.log("Arcjet decision", decision)

  if (decision.isDenied()) {
    return Response.json({ error: "Too Many Requests" }, { status: 429 })
  }

  console.log("Revalidating...")
  revalidatePath("/", "layout")
  return Response.json({ revalidated: "all" })
}

const aj = arcjet({
  key: process.env.ARCJET_KEY ?? "",
  rules: [
    // max 5 requests every 10 mins
    // if exceeded, block for 10 mins
    fixedWindow({
      mode: "LIVE",
      window: "10m",
      max: 5,
    }),
  ],
})
