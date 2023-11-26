import fetchTrakt from "@/lib/fetchTrakt";
import { useQuery } from "@tanstack/react-query";

const TraktCard = () => {
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ["trakt"],
    queryFn: () => fetchTrakt(),
  });
  if (isLoading) {
    return <p>Loading Trakt data...</p>;
  }
  if (isSuccess) {
  }
  return <p>Trakt</p>;
};

export default TraktCard;
