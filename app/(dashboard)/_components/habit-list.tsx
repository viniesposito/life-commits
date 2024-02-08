import { TileGrid } from "@/components/TileGrid";
import mockData from "@/data/habit_tracker_mock_data.json";
import { NoHabits } from "./no-habits";

interface DayData {
  date: string;
  count: number;
}

interface HabitData {
  habit: string;
  data: DayData[];
}

export const HabbitList = () => {
  //   const habits = Object.keys(Object.assign({}, ...mockData));
  //   habits.splice(habits.indexOf("date"), 1);

  const habits = {};

  const transformDataForHabit = (data: any[], habit: string) => {
    return data.map((day) => ({
      date: day.date,
      count: day[habit],
    }));
  };

  return (
    <div className="h-full p-6">
      {!habits?.length ? (
        <NoHabits />
      ) : (
        <>
          <h1 className="text-4xl font-bold my-4">Life Commits</h1>
          <p className="my-4">
            Track what's meaningful to you as easy as you track your GitHub
            commits. &#128513;{" "}
          </p>
          <div className="grid grid-flow-row gap-y-1">
            {habits.map((habit) => (
              <div className="overflow-x-auto" key={habit}>
                <TileGrid
                  data={transformDataForHabit(mockData, habit)}
                  habit={habit}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
