import LastFmCard from "@/components/LastfmCard";
import TraktCard from "@/components/TraktCard";

export default function Activity() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Activity</h1>
        <p>{`I enjoy consuming media, sometimes.`}</p>
      </div>
      <LastFmCard />
      <TraktCard />
    </div>
  );
}
