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
  data: Record<string, number>;
  title: string;
}

export const TileGrid = ({ data, title }: TileGridProps) => {
  const totalColumns = Math.ceil(data.length / 7);

  const gridStyle = {
    gridTemplateColumns: `repeat(${totalColumns}, 1fr)`, // total number of columns
  };

  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
      <div
        className={`grid grid-rows-[repeat(7, 1fr)] gap-2 border rounded border-slate-300 bg-slate-100 p-1`}
        style={gridStyle}
      >
        {Object.entries(data).map(([date, count], index) => (
          <div key={index}>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger className="cursor-default">
                  <Tile key={index} date={date} count={count} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {typeof count === "undefined" || count === 0
                      ? "No contributions "
                      : count === 1
                      ? `${count} contribution `
                      : `${count} contributions `}
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
