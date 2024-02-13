import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tile } from "./Tile";
import { format } from "date-fns";

interface TileGridProps {
  data: Record<string, number>;
  title: string;
}

export const TileGrid = ({ data, title }: TileGridProps) => {
  const generateDates = (startDate: string, days: number): string[] => {
    const result = [];
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

    // Initialize all dates with a count of 0
    dateArray.forEach((date) => {
      initializedData[date] = 0;
    });

    // Overwrite with existing data counts
    Object.entries(existingData).forEach(([date, count]) => {
      initializedData[date] = count;
    });

    return initializedData;
  };

  const todayDate = new Date();
  const defaultDate = format(todayDate!, "yyyy-MM-dd");

  const initializedData = initializeDataWithDates(data, defaultDate, 365);

  const sortedDates = Object.keys(initializedData).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="overflow-x-auto grid grid-rows-7 grid-flow-col gap-0.5 border rounded border-slate-300 bg-slate-100 p-1">
        {sortedDates.map((date, index) => (
          <div key={index}>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger className="cursor-default">
                  <Tile key={index} date={date} count={initializedData[date]} />
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
  );
};
