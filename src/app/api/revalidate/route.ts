import { revalidateTag } from "next/cache"
import { NextResponse, type NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 })
  }
  const secret = req.nextUrl.searchParams.get("secret")
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    revalidateTag("raindrop")

    return NextResponse.json({ revalidated: "raindrop" })
  } catch (e) {
    return NextResponse.json({ revalidated: false })
  }
}
