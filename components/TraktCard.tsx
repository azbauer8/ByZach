import fetchTrakt from "@/lib/fetchTrakt";
import fetchImdb from "@/lib/fetchImdb";
import { useQuery, useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { PiPopcornDuotone } from "react-icons/pi";

const TraktCard = () => {
  let watching, playingWhen, title, url, episode, id, slug, latestWatch;
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ["trakt"],
    queryFn: () => fetchTrakt(),
  });
  const { isSuccess: isSuccessImdb, data: dataImdb } = useQuery({
    queryKey: ["imdb"],
    queryFn: () =>
      data instanceof Array && data[0].type === "episode"
        ? fetchImdb(data[0].show.ids.imdb)
        : data instanceof Array && data[0].type === "movie"
        ? fetchImdb(data[0].movie.ids.imdb)
        : data.type === "episode"
        ? fetchImdb(data.show.ids.imdb)
        : fetchImdb(data.movie.ids.imdb),
    enabled: !!data,
  });
  if (isLoading) {
    return <p>Loading Trakt data...</p>;
  }
  if (isSuccess) {
    // history
    if (data instanceof Array) {
      latestWatch = data[0];
      watching = false;
      playingWhen = latestWatch.watched_at;
    }
    // watching
    else {
      latestWatch = data;
      watching = true;
      playingWhen = latestWatch.started_at;
    }

    // show
    if (latestWatch.type === "episode") {
      title = latestWatch.show.title;
      episode = latestWatch.episode.title;
      url = `https://trakt.tv/shows/${latestWatch.show.ids.slug}`;
      id = latestWatch.show.ids.imdb;
      slug = latestWatch.show.ids.slug;
    }
    // movie
    else {
      title = latestWatch.movie.title;
      url = `https://trakt.tv/movies/${latestWatch.movie.ids.slug}`;
      id = latestWatch.movie.ids.imdb;
      slug = latestWatch.movie.ids.slug;
    }
    playingWhen = getTimeDiff(playingWhen);

    return (
      <a
        className="flex flex-row max-w-xl rounded-lg space-x-5 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
        href={url}
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
        ) : null}
        <div className="my-auto flex-grow">
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
        </div>
      </a>
    );
  }
};

function getTimeDiff(givenDate: string) {
  const givenDatetime = new Date(`${givenDate}`);
  const currentDatetime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifferenceInMilliseconds =
    currentDatetime.valueOf() - givenDatetime.valueOf();

  // Convert milliseconds to seconds
  const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;

  // Convert seconds to minutes, hours, days, etc. based on your requirements
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