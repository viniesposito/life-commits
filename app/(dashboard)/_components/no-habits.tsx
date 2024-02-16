"use client";
import { useUser } from "@clerk/nextjs";

export const NoHabits = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="h-full flex flex-col mt-10">
      <h2 className="text-4xl font-semibold">
        Welcome{user?.firstName ? `, ${user.firstName}!` : "!"}
      </h2>
      <p className="text-muted-foreground text-sm mt-2 text-center">
        You are not tracking any habits yet.
        <br /> Click the green button above to create one and get started!
      </p>
    </div>
  );
};
