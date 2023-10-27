"use client";
import { useTheme } from "next-themes";
import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return ( 
        <div className="w-full flex items-center justify-center">
            <Button variant="ghost" size="sm"  onClick={handleClick} className="rounded-xl p-3 w-full">
                {theme === "dark" ? (
                    <>
                    <SunIcon className="w-4 h-4" />
                    <span className="ml-2 text-white">Light</span>
                    </>
                    
                ) : (
                    <>
                    
                    <MoonIcon className="w-4 h-4" />
                    <span className="ml-2 text-black">Dark</span>
                    </>
                )}
            </Button>
        </div>
     );
}
 
export default ModeToggle;