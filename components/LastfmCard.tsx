import fetchLastFm from "@/lib/fetchLastFm";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { PiWaveformBold } from "react-icons/pi";
import { Skeleton } from "./ui/skeleton";

const LastFmCard = () => {
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ["lastfm"],
    queryFn: () => fetchLastFm(),
  });
  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-36 w-36 rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    );
  }
  if (isSuccess) {
    const latestTrack = data.recenttracks.track[0];
    let playingWhen;
    latestTrack["@attr"]?.nowplaying === undefined
      ? (playingWhen = getTimeDiff(latestTrack.date["#text"]))
      : (playingWhen = "Now Playing");
    return (
      <a
        className="flex flex-row max-w-xl rounded-lg space-x-5 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
        href={latestTrack.url}
      >
        <Image
          src={latestTrack.image[3]["#text"]}
          alt={latestTrack.album["#text"]}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg flex-none w-1/4 items-center justify-center self-center"
        />
        <div className="my-auto flex-grow">
          <div className="flex flex-row space-x-1 text-red-400 items-center">
            <PiWaveformBold className="w-5 h-5" />
            <p className="text-sm font-medium">{playingWhen}</p>
          </div>
          <p className="font-pop font-semibold text-lg">{latestTrack.name}</p>
          <p className="font-default">{latestTrack.artist["#text"]}</p>
        </div>
      </a>
    );
  }
};

function getTimeDiff(givenDate: string) {
  const givenDatetime = new Date(`${givenDate} UTC`);
  const currentDatetime = new Date();

  const timeDifferenceInMilliseconds =
    currentDatetime.valueOf() - givenDatetime.valueOf();

  const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;

  const daysAgo = Math.floor(timeDifferenceInSeconds / secondsInDay);
  const hoursAgo = Math.floor(
    (timeDifferenceInSeconds % secondsInDay) / secondsInHour
  );
  const minutesAgo = Math.floor(
    ((timeDifferenceInSeconds % secondsInDay) % secondsInHour) / secondsInMinute
  );

  if (daysAgo === 0 && hoursAgo === 0) {
    if (minutesAgo === 1) {
      return `${minutesAgo} min ago`;
    }
    return `${minutesAgo} mins ago`;
  } else if (daysAgo === 0) {
    if (hoursAgo === 1) {
      return `${hoursAgo} hour ago`;
    }
    return `${hoursAgo} hours ago`;
  } else {
    if (daysAgo === 1) {
      return `${daysAgo} day ago`;
    }
    return `${daysAgo} days ago`;
  }
}

export default LastFmCard;
