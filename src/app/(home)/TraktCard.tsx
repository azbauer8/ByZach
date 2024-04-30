import Image from "next/image"
import { Button } from "@nextui-org/button"
import { PiPopcornBold } from "react-icons/pi"

import { getTrakt } from "@/lib/getActivity"
import { Skeleton } from "@/components/Primitives/Skeleton"
import { Typography } from "@/components/Primitives/Typography"

export default async function TraktCard() {
  const traktData = await getTrakt()
  if (!traktData) return <TraktFallback />
  const { data, poster } = traktData
  if (!data) return <TraktFallback />
  return (
    <Button
      as="a"
      variant="light"
      disableRipple
      className="-mx-3 flex h-auto items-center space-x-5 rounded-lg px-3 py-2"
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
          <Typography affects="small">{data.playingWhen}</Typography>
        </div>
        <Typography variant="h5">{data.title}</Typography>
        {data.episode ? (
          <>
            <Typography
              affects="muted"
              className="text-sm"
            >{`S${data.season}E${data.episodeNum}: ${data.episode}`}</Typography>
          </>
        ) : (
          <>
            <Typography affects="muted" className="text-sm italic">
              {data.tagline}
            </Typography>
          </>
        )}
      </div>
    </Button>
  )
}

function TraktFallback() {
  return (
    <div className="-mx-3 flex h-auto items-center space-x-5 rounded-lg px-3 py-2">
      <Image
        src="/trakt_placeholder.svg"
        alt="Poster Placeholder"
        width={144}
        height={216}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/5 flex-none items-center justify-center self-center rounded-lg"
      />
      <div className="my-auto w-full flex-1 space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-lg" disableAnimation />
        <Skeleton className="h-4 w-[150px] rounded-lg" disableAnimation />
        <Skeleton className="h-4 w-[125px] rounded-lg" disableAnimation />
      </div>
    </div>
  )
}