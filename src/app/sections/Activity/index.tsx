import { Suspense } from "react"
import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"
import { LoadingLastFm, LoadingTrakt } from "./loading"

export default function Activity() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Activity</h1>
        <p>I enjoy consuming media, sometimes.</p>
      </div>
      {/* <Suspense fallback={<LoadingLastFm />}> */}
        <LastFmCard />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingTrakt />}> */}
        <TraktCard />
      {/* </Suspense> */}
    </div>
  )
}
