"use client";
import { useUser } from "@clerk/nextjs";
import { CreateHabbitButton } from "./create-habit-button";

export const NoHabits = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold">Welcome, {user?.firstName}!</h2>
      <p className="text-muted-foreground text-sm mt-2 text-center">
        You are not tracking any habits yet.
        <br /> Create one to get started!
      </p>
      <div className="mt-6">
        <CreateHabbitButton />
      </div>
    </div>
  );
};
