"use-client";
import React from "react";
import { Plus, Settings } from "lucide-react";

interface NewButtonProps {
  iconType: string;
}

const NewButton: React.FC<NewButtonProps> = ({ iconType }) => {
  return (
    <>
      <div className="aspect-square">
        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
          {iconType === "plus" ? (
            <Plus className="text-white" />
          ) : iconType === "settings" ? (
            <Settings className="text-white" />
          ) : null}
        </button>
      </div>
    </>
  );
};

export default NewButton;