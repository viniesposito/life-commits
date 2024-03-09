"use client";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useQuery } from "convex/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const RemoveHabitButton = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const authorId = user!.id;
  //   const listHabits = useQuery(api.habits.getAllHabits, { authorId });

  const [title, setTitle] = useState("");

  const remove = useMutation(api.habit.remove);
  const entries = useQuery(api.habits.getIdsByTitle, { authorId, title });

  const onSubmit = (title: string) => {
    if (!entries) {
      // todo: handle case where habit user inputted doesnt exist (let them know)
    } else {
    entries?.map((id) =>
      remove({
        id: id,
      })
        .then(() => {
          toast.success("Habit deleted...");
        })
        .catch(() => toast.error("Failed to delete habit"))
    );
      }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full my-2 p-3 text-white transition-all duration-500 bg-gradient-to-tl from-red-300 via-rose-800 to-red-400 bg-size-200 bg-pos-0 hover:bg-pos-100 border-2 border-black font-semibold">
          Delete a habit...
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete a habit</DialogTitle>
          <DialogDescription>
            Write below the name of the habit you want to delete. This action is
            irreversible!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Habit I want to delete"
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() => onSubmit(title)}
              type="submit"
              className="bg-amber-300 text-black hover:bg-red-700 hover:text-white rounded-none"
            >
              Delete habit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
