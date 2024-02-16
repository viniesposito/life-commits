import localFont from "next/font/local";
import { HabbitList } from "./_components/habit-list";
import { UserButton } from "@clerk/nextjs";
import { CreateHabbitButton } from "./_components/create-habit-button";
import { RemoveHabitButton } from "./_components/remove-habit-button";

const workbench = localFont({ src: "./Workbench.ttf", display: "swap" });

const MyPage = () => {
  return (
    <header className="h-full flex flex-col items-center justify-center text-center pt-10">
      <div className="bg-stone-500 pb-6 rounded px-2">
        <div className="flex flex-row">
          <div className=" bg-white border-4 border-stone-600 rounded w-fit -mt-8">
            <h1
              className={`${workbench.className} text-[72px] bg-gradient-to-r from-green-950 via-green-200 to-green-500 inline-block text-transparent bg-clip-text`}
            >
              life commits
            </h1>
          </div>
          <div className="grow" />
          <div className="pt-1">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-[64px] w-[64px]",
                },
              }}
            />
          </div>
        </div>
        <p className="text-slate-50 pt-4">
          Track what's meaningful to you as easy as you track your GitHub
          commits. &#128513;{" "}
        </p>
      </div>
      <div className="flex flex-row">
        <div>
          <CreateHabbitButton />
        </div>
        <div>
          <RemoveHabitButton />
        </div>
      </div>
      <div className="h-full">
        <HabbitList />
      </div>
    </header>
  );
};

export default MyPage;
