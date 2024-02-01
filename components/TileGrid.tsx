import React from "react";
import Tile from "./Tile"; // Adjust the import path if necessary

// Assuming data has a specific shape, define an interface for it
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
    display: "grid",
    gridTemplateRows: "repeat(7, 15px)", // 7 rows
    gridTemplateColumns: `repeat(${totalColumns}, 1fr)`, // total number of columns
    gap: "2px", // Use `gap` instead of `gridGap` for consistency with TailwindCSS and modern CSS
  };

  return (
    <div>
      <h1 className="text-lg font-bold">{habit}</h1>
      <div className="border rounded border-slate-600" style={gridStyle}>
        {Array.from({ length: totalColumns }).map((_, colIndex) => {
          const startIndex = colIndex * 7;
          const endIndex = startIndex + 7;
          const columnData = data.slice(startIndex, endIndex);

          return (
            <div key={colIndex}>
              {columnData.map((dayData, index) => (
                <Tile key={index} date={dayData.date} count={dayData.count} />
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
