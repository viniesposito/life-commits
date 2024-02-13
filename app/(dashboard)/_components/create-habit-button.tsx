"use client";
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
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";

export const CreateHabbitButton = () => {
  // const date = new Date();
  // const defaultDate = `${date.getDate()}-${
  //   date.getMonth() + 1
  // }-${date.getFullYear()}`;

  const create = useMutation(api.habit.create);

  const [title, setTitle] = useState("");
  const [effectiveDate, setEffectiveDate] = useState<Date | undefined>(
    new Date()
  );
  const [count, setCount] = useState(0);

  const onSubmit = (
    inputTitle: string,
    inputEffectiveDate: string,
    inputCount: number
  ) => {
    create({
      title: inputTitle,
      effectiveDate: inputEffectiveDate,
      count: inputCount,
    })
      .then((id) => {
        toast.success("Habit created");
      })
      .catch(() => toast.error("Failed to create habit"));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-blue-600">
          Create a habit!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a habit</DialogTitle>
          <DialogDescription>
            Give your habit a title, a start date and count. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Went for a run"
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="effectiveDate" className="text-right">
              Start date
            </Label>
            <Input
              id="effectiveDate"
              defaultValue={defaultDate}
              className="col-span-3"
              onChange={(e) => setEffectiveDate(e.target.value)}
            />
          </div> */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="count" className="text-right">
              Count
            </Label>
            <Input
              id="count"
              placeholder="0"
              className="col-span-3"
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="count" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !effectiveDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {effectiveDate ? (
                    format(effectiveDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={effectiveDate}
                  onSelect={setEffectiveDate}
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() =>
                onSubmit(title, format(effectiveDate!, "yyyy-MM-dd"), count)
              }
              type="submit"
              className="bg-blue-600"
            >
              Create habit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
