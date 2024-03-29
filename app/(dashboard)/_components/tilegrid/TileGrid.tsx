import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tile } from "./Tile";
import { format, min } from "date-fns";
import { AddEntryButton } from "../add-entry-button";
import { useSearchParams } from "next/navigation";

interface TileGridProps {
  data: Record<string, number>;
  title: string;
}

export const TileGrid = ({ data, title }: TileGridProps) => {
  const searchParams = useSearchParams();
  const historyLength = searchParams.get("show");

  const generateDates = (startDate: string, days: number): string[] => {
    const result = [startDate];
    const currentDate = new Date(startDate);
    for (let i = 0; i < days; i++) {
      // Assuming the date format you want is "dd-mm-yyyy"
      const date = format(currentDate!, "yyyy-MM-dd");
      result.push(date);
      currentDate.setDate(currentDate.getDate() - 1); // Move to next day
    }
    return result;
  };

  const initializeDataWithDates = (
    existingData: Record<string, number>,
    startDate: string,
    days: number
  ): Record<string, number> => {
    const dateArray = generateDates(startDate, days);
    const initializedData: Record<string, number> = {};

    dateArray.forEach((date) => {
      initializedData[date] = 0;
    });

    const defaultDateDt = new Date(startDate);
    const minDate = new Date(
      defaultDateDt.setDate(defaultDateDt.getDate() - days)
    );

    Object.entries(existingData).forEach(([date, count]) => {
      if (new Date(date).getTime() >= minDate.getTime()) {
        initializedData[date] = count;
      }
    });

    return initializedData;
  };

  const todayDate = new Date();
  const defaultDate = format(todayDate!, "yyyy-MM-dd");

  const initializedData = initializeDataWithDates(
    data,
    defaultDate,
    parseInt(historyLength!)
  );

  const sortedDates = Object.keys(initializedData).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="mt-6">
      <div className="flex flex-row -mb-2">
        <div className=" bg-amber-400 text-center w-fit p-1 ml-2 -mt-8 border-2 border-black">
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
        <div className="grow" />
        <AddEntryButton title={title} />
      </div>
      <div>
        <div className="rounded overflow-x-auto grid grid-rows-7 grid-flow-col gap-0.5 border border-slate-700 p-1 pt-2">
          {sortedDates.map((date, index) => (
            <div key={index}>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger className="cursor-default">
                    <Tile key={index} count={initializedData[date]} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {typeof initializedData[date] === "undefined" ||
                      initializedData[date] === 0
                        ? "No contributions "
                        : initializedData[date] === 1
                        ? `${initializedData[date]} contribution `
                        : `${initializedData[date]} contributions `}
                      on {date}.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
