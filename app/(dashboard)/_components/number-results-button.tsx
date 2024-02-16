"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NumberResultsButton = () => {
  const router = useRouter();
  const [historyLength, setHistoryLength] = useState("365");

  useEffect(() => {
    router.push(`?show=${historyLength}`, { scroll: false });
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-full my-2 p-3 text-white transition-all duration-500 bg-gradient-to-tl from-slate-500 via-stone-800 to-slate-400 bg-size-200 bg-pos-0 hover:bg-pos-100 border-2 border-black font-semibold">
          Settings
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>History Length Displayed</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={historyLength}
          onValueChange={setHistoryLength}
        >
          <DropdownMenuRadioItem value={"30"}>30 days</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"60"}>60 days</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"90"}>90 days</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"365"}>1 year</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
