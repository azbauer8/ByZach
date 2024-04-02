import { Suspense } from "react"

import { Typography } from "@/components/ui/typography"

import LastFmCard from "./LastfmCard"
import { LoadingLastFm, LoadingTrakt } from "./loaders"
import TraktCard from "./TraktCard"

export default function Activity() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Activity</h1>
        <Typography variant="p" affects="muted">
          I enjoy consuming media, sometimes.
        </Typography>
      </div>
      <Suspense fallback={<LoadingLastFm />}>
        <LastFmCard />
      </Suspense>
      <Suspense fallback={<LoadingTrakt />}>
        <TraktCard />
      </Suspense>
    </div>
  )
}
