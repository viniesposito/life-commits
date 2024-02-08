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

  return <div>{JSON.stringify(habits)}</div>;
};
