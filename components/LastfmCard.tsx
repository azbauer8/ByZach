import fetchLastFm from "@/lib/fetchLastFm";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

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
          {latestTrack["@attr"]?.nowplaying !== undefined ? (
            <p className="italic">Now Playing</p>
          ) : null}
          <p className="font-pop font-semibold text-lg">{latestTrack.name}</p>
          <p className="font-default">{latestTrack.artist["#text"]}</p>
        </div>
      </a>
    );
  }
};

export default LastFmCard;
