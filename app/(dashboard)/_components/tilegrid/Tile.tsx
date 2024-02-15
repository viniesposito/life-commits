interface TileProps {
  date: string;
  count: number;
  maxValue: number;
}

export const Tile = ({ date, count, maxValue }: TileProps) => {
  const getColorClass = (count: number, maxValue: number): string => {
    if (count === 0) return "bg-slate-100";

    const opacityRatio = Math.min(
      Math.ceil(Math.round((1000 * count) / maxValue) / 100) * 100,
      900
    );
    const colorClass = `bg-green-${opacityRatio}`;

    return colorClass;
  };

  if (count < 0) {
    return null;
  }

  return (
    <>
      <div
        className={`rounded-sm ${getColorClass(count, maxValue)} w-3 h-3 m-0.2`}
      ></div>
    </>
  );
};
