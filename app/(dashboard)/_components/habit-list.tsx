"use client";
import { NoHabits } from "./no-habits";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export const HabbitList = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const authorId = user!.id;
  const habits = useQuery(api.habits.get, { authorId });

  if (habits === undefined) {
    return <div>Loading...</div>;
  }

  if (!habits?.length) {
    return <NoHabits />;
  }

  return (
    // <div className="grid grid-cols-1 gap-5 mt-8 pb-10">
    //   {data?.map(habit) => (

    //   )}
    // </div>
    JSON.stringify(habits)
  );
};
