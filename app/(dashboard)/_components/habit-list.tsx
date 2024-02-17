"use client";
import { NoHabits } from "./no-habits";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { TileGrid } from "./tilegrid/TileGrid";
import { useSearchParams } from "next/navigation";

export const HabbitList = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const authorId = user!.id;
  const habits = useQuery(api.habits.get, { authorId });
  const searchParams = useSearchParams();
  const historyLength = searchParams.get("show");

  if (habits === undefined) {
    return <div>Loading...</div>;
  }

  if (!habits?.length) {
    return <NoHabits />;
  }

  const convertDataStructure = (data: any[]) => {
    const result: { [key: string]: { [key: string]: number } } = {};

    data.forEach((item) => {
      const { effectiveDate, count, title } = item;

      if (!result[title]) {
        result[title] = {};
      }

      if (!result[title][effectiveDate]) {
        result[title][effectiveDate] = 0;
      }

      result[title][effectiveDate] += count;
    });

    return result;
  };

  const structuredData = convertDataStructure(habits);

  return (
    <div
      className={`grid grid-cols-${
        historyLength! === "365" ? 1 : 2
      } gap-5 mt-8 pb-10`}
    >
      {Object.entries(structuredData).map(([title, data], index) => (
        <TileGrid key={index} title={title} data={data} />
      ))}
    </div>
  );
};
