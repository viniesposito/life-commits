import React from "react";
import Tile from "./Tile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DayData {
  date: string;
  count: number;
}

interface TileGridProps {
  data: DayData[];
  habit: string;
}

const TileGrid: React.FC<TileGridProps> = ({ data, habit }) => {
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
                    <Tooltip>
                      <TooltipTrigger>
                        <Tile
                          key={index}
                          date={dayData.date}
                          count={dayData.count}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {dayData.count}
                          {dayData.count === 1
                            ? " contribution "
                            : " contributions "}
                          on {dayData.date}.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
              {Array.from({ length: 7 - columnData.length }).map(
                (_, emptyIndex) => (
                  <Tile key={`empty-${emptyIndex}`} count={-1} date={""} />
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TileGrid;
