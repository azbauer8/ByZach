import { Text } from "@/components/ui/text"

import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export default function Activity() {
  return (
    <div className="space-y-0.5">
      <Text variant="h3">Activity</Text>
      <Text variant="p" affects="muted">
        I enjoy consuming media, sometimes.
      </Text>
      <LastFmCard />
      <TraktCard />
    </div>
  )
}
