interface TileProps {
  count: number;
}

export const Tile = ({ count }: TileProps) => {
  if (count < 0) {
    return null;
  }

  const getColorStrength = (count: number): string => {
    if (count === 0) return "#f1f5f9";
    if (count > 0 && count <= 2) return "#d2f3de";
    if (count > 2 && count <= 4) return "#7adc9e";
    if (count > 4 && count <= 6) return "#38ca6e";
    if (count > 6 && count <= 8) return "#1b9d4b";
    if (count > 8 && count <= 10) return "#147638";
    if (count > 10) return "#0d4e25";
    return "";
  };

  return (
    <>
      <div
        style={{ backgroundColor: `${getColorStrength(count)}` }}
        className="rounded-sm w-3 h-3 m-0.2"
      ></div>
    </>
  );
};
