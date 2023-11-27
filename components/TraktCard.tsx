import fetchTrakt from "@/lib/fetchTrakt";
import fetchImdb from "@/lib/fetchImdb";
import { useQuery, useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { PiPopcornDuotone } from "react-icons/pi";
import { Skeleton } from "./ui/skeleton";
import traktPlaceholder from "../assets/trakt_placeholder.svg";

const TraktCard = () => {
  let watching,
    playingWhen,
    title,
    url = "",
    episode,
    id,
    slug,
    latestWatch;
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ["trakt"],
    queryFn: () => fetchTrakt(),
  });
  const { isSuccess: isSuccessImdb, data: dataImdb } = useQuery({
    queryKey: ["imdb"],
    queryFn: () => {
      const imdbId =
        data instanceof Array
          ? data[0].type === "episode"
            ? data[0].show.ids.imdb
            : data[0].movie.ids.imdb
          : data.type === "episode"
          ? data.show.ids.imdb
          : data.movie.ids.imdb;
      return fetchImdb(imdbId);
    },
    enabled: !!data,
  });

  // history
  if (isSuccess && data instanceof Array) {
    latestWatch = data[0];
    watching = false;
    playingWhen = getTimeDiff(latestWatch.watched_at);
  }
  // watching
  else if (isSuccess) {
    latestWatch = data;
    watching = true;
    playingWhen = "Now Watching";
  }

  // show
  if (isSuccess && latestWatch.type === "episode") {
    title = latestWatch.show.title;
    episode = latestWatch.episode.title;
    url = `https://trakt.tv/shows/${latestWatch.show.ids.slug}`;
    id = latestWatch.show.ids.imdb;
    slug = latestWatch.show.ids.slug;
  }
  // movie
  else if (isSuccess) {
    title = latestWatch.movie.title;
    url = `https://trakt.tv/movies/${latestWatch.movie.ids.slug}`;
    id = latestWatch.movie.ids.imdb;
    slug = latestWatch.movie.ids.slug;
  }

  return (
    <a
      className={`flex items-center space-x-5 max-w-xl ${
        isSuccess
          ? "ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
          : undefined
      }`}
      href={url || undefined}
    >
      {isSuccessImdb && dataImdb ? (
        <Image
          src={dataImdb}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg flex-none w-1/4 items-center justify-center self-center"
        />
      ) : (
        <Image
          src={traktPlaceholder}
          alt="Placeholder poster"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg flex-none w-1/4 items-center justify-center self-center animate-pulse"
        />
      )}
      <div className="my-auto flex-grow space-y-3">
        {isLoading ? (
          <>
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[125px]" />
          </>
        ) : (
          <>
            <div className="flex flex-row space-x-1 text-red-400 items-center">
              <PiPopcornDuotone className="w-5 h-5" />
              <p className="text-sm font-medium">{playingWhen}</p>
            </div>
            {episode ? (
              <>
                <p className="font-pop font-semibold text-lg">{title}</p>
                <p className="font-default text-lg">{episode}</p>
              </>
            ) : (
              <p className="font-pop font-semibold text-lg">{title}</p>
            )}
          </>
        )}
      </div>
    </a>
  );
};

function getTimeDiff(givenDate: string) {
  const givenDatetime = new Date(`${givenDate}`);
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

export default TraktCard;
