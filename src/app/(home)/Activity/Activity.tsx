import { Typography } from "@/components/Primitives/Typography"

import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export default function Activity() {
  return (
    <div className="space-y-0.5">
      <Typography variant="h3">Activity</Typography>
      <Typography variant="p" affects="muted">
        I enjoy consuming media, sometimes.
      </Typography>
      <LastFmCard />
      <TraktCard />
    </div>
  )
}
