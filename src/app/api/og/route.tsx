import { ImageResponse } from "next/og"

import { BackgroundCanvas, ProfileContent } from "@/app/api/og/OgCard"

export async function GET() {
  return new ImageResponse(
    (
      <BackgroundCanvas>
        <ProfileContent />
      </BackgroundCanvas>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
