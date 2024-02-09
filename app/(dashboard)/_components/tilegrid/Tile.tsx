interface TileProps {
  date: string;
  count: number;
}

export const Tile = ({ date, count }: TileProps) => {
  const getColorClass = (count: number): string => {
    if (count > 10) return "bg-green-900";
    if (count > 5) return "bg-green-500";
    if (count > 0) return "bg-green-100";
    if (count === 0) return "bg-slate-100";
    return "bg-transparent";
  };

  if (count < 0) {
    return null;
  }

  return (
    <>
      <div
        className={`rounded ${getColorClass(count)} w-3 h-3 m-0.2 border`}
      ></div>
    </>
  );
};
