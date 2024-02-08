import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tile } from "./Tile";

interface DayData {
  date: string;
  count: number;
}

interface TileGridProps {
  data: DayData[];
  habit: string;
}

export const TileGrid = ({ data, habit }: TileGridProps) => {
  const totalColumns = Math.ceil(data.length / 7);

  const gridStyle = {
    gridTemplateColumns: `repeat(${totalColumns}, 1fr)`, // total number of columns
  };

  return (
    <div>
      <h1 className="text-lg font-bold">{habit}</h1>
      <div
        className={`grid grid-rows-[repeat(7, 1fr)] gap-2 border rounded border-slate-300 bg-slate-100 p-1`}
        style={gridStyle}
      >
        {Array.from({ length: totalColumns }).map((_, colIndex) => {
          const startIndex = colIndex * 7;
          const endIndex = startIndex + 7;
          const columnData = data.slice(startIndex, endIndex);

          return (
            <div key={colIndex}>
              {columnData.map((dayData, index) => (
                <div key={index}>
                  <TooltipProvider>
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger className="cursor-default">
                        <Tile
                          key={index}
                          date={dayData.date}
                          count={dayData.count}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {typeof dayData.count === "undefined" ||
                          dayData.count === 0
                            ? "No contributions "
                            : dayData.count === 1
                            ? `${dayData.count} contribution `
                            : `${dayData.count} contributions `}
                          on {dayData.date}.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
