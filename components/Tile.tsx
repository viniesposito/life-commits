import React from "react";

interface TileProps {
  date: string;
  count: number;
}

const Tile: React.FC<TileProps> = ({ date, count }) => {
  const getColorClass = (count: number): string => {
    if (count > 10) return "bg-green-900";
    if (count > 5) return "bg-green-500";
    if (count > 0) return "bg-green-100";
    if (count === 0) return "bg-green-100";
    return "bg-transparent";
  };

  if (count < 0) {
    return null;
  }

  return <div className={`rounded ${getColorClass(count)} w-4 h-4 m-1`}></div>;
};

export default Tile;
