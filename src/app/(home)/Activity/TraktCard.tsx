import Image from "next/image"
import { PiPopcornBold } from "react-icons/pi"

import { getTrakt } from "@/lib/getActivity"
import Skeleton from "@/components/ui/skeleton"
import { Text } from "@/components/ui/text"

export default async function TraktCard() {
  const traktData = await getTrakt()
  if (!traktData) return <TraktFallback />
  const { data, poster } = traktData
  if (!data) return <TraktFallback />
  return (
    <a
      className="hover:bg-highlight-hover active:bg-highlight-hover -mx-3 flex items-center space-x-5 rounded-lg px-3 py-2 ring-offset-4 transition"
      href={data.url}
    >
      <Image
        src={poster ?? "/trakt_placeholder.svg"}
        alt={data.title}
        width={144}
        height={216}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/5 flex-none animate-reveal items-center justify-center self-center rounded-lg"
      />

      <div className="my-auto grow space-y-0.5">
        <div className="flex flex-row items-center space-x-1 text-red-500/95 dark:text-red-400">
          <PiPopcornBold className="size-5" />
          <Text affects="small">{data.playingWhen}</Text>
        </div>
        <Text variant="h5">{data.title}</Text>
        {data.episode ? (
          <>
            <Text
              affects="muted"
              className="text-sm"
            >{`S${data.season}E${data.episodeNum}: ${data.episode}`}</Text>
          </>
        ) : (
          <>
            <Text affects="muted" className="text-sm italic">
              {data.tagline}
            </Text>
          </>
        )}
      </div>
    </a>
  )
}

function TraktFallback() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Skeleton className="aspect-[2/3] w-1/4 flex-none animate-pulse items-center justify-center self-center rounded-lg" />
      <div className="my-auto grow space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-lg" />
        <Skeleton className="h-4 w-[150px] rounded-lg" />
        <Skeleton className="h-4 w-[125px] rounded-lg" />
      </div>
    </div>
  )
}
