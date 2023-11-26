import fetchLastFm from "@/lib/fetchLastFm";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { PiWaveformBold } from "react-icons/pi";

const LastFmCard = () => {
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ["lastfm"],
    queryFn: () => fetchLastFm(),
  });
  if (isLoading) {
    return <p>Loading LastFM data...</p>;
  }
  if (isSuccess) {
    const latestTrack = data.recenttracks.track[0];
    console.log(latestTrack);
    let playingWhen;
    latestTrack["@attr"]?.nowplaying === undefined
      ? (playingWhen = getTimeDiff(latestTrack.date["#text"]))
      : (playingWhen = "Now Playing");
    return (
      <a
        className="flex flex-row max-w-xl rounded-lg space-x-5 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40 w-fit"
        href={latestTrack.url}
      >
        <Image
          src={latestTrack.image[3]["#text"]}
          alt={latestTrack.album["#text"]}
          width={75}
          height={75}
          className="rounded-lg"
        />
        <div className="my-auto">
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

  console.log(daysAgo, hoursAgo, minutesAgo);

  if (daysAgo === 0 && hoursAgo === 0) {
    return `About ${minutesAgo} mins ago`;
  } else if (daysAgo === 0) {
    return `About ${hoursAgo} hours ago`;
  } else {
    return `About ${daysAgo} days ago`;
  }
}

export default LastFmCard;
