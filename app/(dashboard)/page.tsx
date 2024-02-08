import { HabbitList } from "./_components/habit-list";

const MyPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold my-4 text-slate-800">Life Commits</h1>
        <p className="my-4 text-slate-600">
          Track what's meaningful to you as easy as you track your GitHub
          commits. &#128513;{" "}
        </p>
      </div>
      <div className="h-full">
        <HabbitList />
      </div>
    </div>
  );
};

export default MyPage;
