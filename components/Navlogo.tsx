import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ChevronLeft, ChevronRight, Palmtree, Puzzle, Wand2 } from "lucide-react";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      
        <Wand2 className="w-8 h-8 text-sky-500  dark:text-sky-400" />
      
      <p className="ml-1 flex font-semibold font-mono items-center justify-center text-3xl">
        <ChevronLeft className="w-4 h-4  text-xl text-red-500" />
        <span className="text-red-700">A</span>
        <span className="text-slate-800 dark:text-slate-200"></span>
        <span className="text-sky-500">B</span>
        <ChevronRight className="w-4 h-4  text-xl text-sky-500" />
      </p>
    </div>
  );
};

export default NavLogo;
