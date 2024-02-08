"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export const NoHabits = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text=2xl font-semibold mt-6">
        Welcome to Life Commits, {user?.firstName}!
      </h2>
      <div className="text-muted-foreground text-sm mt-2 flex flex-col items-center justify-center">
        <p>You are not tracking any commits yet.</p>
        <p>Create a habbit to get started!</p>
      </div>
      <div className="mt-6">
        <Button size="lg" className="bg-blue-600">
          Create a habbit
        </Button>
      </div>
    </div>
  );
};
