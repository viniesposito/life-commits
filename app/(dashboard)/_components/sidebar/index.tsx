"use client";
import { UserButton } from "@clerk/nextjs";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-slate-500 h-full w-[60px] p-3 flex-col space-y-2">
      <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition">
        <UserButton />
      </div>
      <NewButton />
    </aside>
  );
};
