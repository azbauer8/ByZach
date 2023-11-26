import { useEffect, useState } from "react";
import fetchLastfmData from "@/lib/fetchLastfm";
import fetchTraktData from "@/lib/fetchTrakt";

export default function Activity() {
  useEffect(() => {
    fetchLastfmData();
    fetchTraktData();
  }, []);

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold">Activity</h1>
    </div>
  );
}
