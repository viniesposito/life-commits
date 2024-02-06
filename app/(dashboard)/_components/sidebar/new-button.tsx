"use client";
import { Settings } from "lucide-react";
import { Hint } from "./hint";

export const NewButton = () => {
  return (
    <>
      <div className="aspect-square">
        <Hint label="Settings" side="right" align="center" sideOffset={18}>
          <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Settings className="text-white" />
          </button>
        </Hint>
      </div>
    </>
  );
};
