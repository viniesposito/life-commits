import localFont from "next/font/local";
import { HabbitList } from "./_components/habit-list";

const workbench = localFont({ src: "./Workbench.ttf", display: "swap" });

const MyPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center ">
      <div>
        <h1
          className={`${workbench.className} text-[72px] my-4 bg-gradient-to-r from-green-950 via-green-200 to-green-500 inline-block text-transparent bg-clip-text`}
        >
          life commits
        </h1>
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
