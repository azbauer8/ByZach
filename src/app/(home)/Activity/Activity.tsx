import { Suspense } from "react"

import { Text } from "@/components/ui/text"

import { LoadingLastFm, LoadingTrakt } from "./Activity.loading"
import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export default function Activity() {
  return (
    <div className="space-y-5">
      <div className="space-y-0.5">
        <Text variant="h3">Activity</Text>
        <Text variant="p" affects="muted">
          I enjoy consuming media, sometimes.
        </Text>
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
