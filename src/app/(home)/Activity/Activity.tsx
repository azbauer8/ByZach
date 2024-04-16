import { Suspense } from "react"

import { Typography } from "@/components/ui/typography"

import { LoadingLastFm, LoadingTrakt } from "./Activity.loading"
import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export default function Activity() {
  return (
    <div className="space-y-5">
      <div className="space-y-0.5">
        <Typography
          variant="h3"
          className="underline-offset-2 hover:text-primary hover:underline active:text-primary  active:underline"
        >
          Activity
        </Typography>
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
