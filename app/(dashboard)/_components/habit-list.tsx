"use client";
import { TileGrid } from "@/components/TileGrid";
import mockData from "@/data/habit_tracker_mock_data.json";
import { NoHabits } from "./no-habits";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

interface DayData {
  date: string;
  count: number;
}

interface HabitData {
  habit: string;
  data: DayData[];
}

export const HabbitList = () => {
  //   const habits = Object.keys(Object.assign({}, ...mockData));
  //   habits.splice(habits.indexOf("date"), 1);
  const { isSignedIn, user, isLoaded } = useUser();
  const authorId = user!.id;
  const habits = useQuery(api.habits.get, { authorId });

  if (habits === undefined) {
    return <div>Loading...</div>;
  }

  if (!habits?.length) {
    return <NoHabits />;
  }

  // const transformDataForHabit = (data: any[], habit: string) => {
  //   return data.map((day) => ({
  //     date: day.date,
  //     count: day[habit],
  //   }));
  // };

  return <div>{JSON.stringify(habits)}</div>;
};
