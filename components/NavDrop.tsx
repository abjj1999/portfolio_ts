import { ArrowUpDown, ChevronDown, Crown, Gamepad2, PersonStanding } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import ModeToggle from "./mode-toggle";
import Link from "next/link";


export const NavDrop = () => {
    return (
      <Menubar className="bg-slate-200/75 dark:bg-slate-800">
      <MenubarMenu>
        <MenubarTrigger>
        <div className=" w-full flex justify-between items-center">
            <p className="text-xl">
                More
            </p>
            <ArrowUpDown className="w-4 h-4 text-xl ml-2" />
        </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <ModeToggle />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          <div className=" w-full flex justify-between items-center">
            <Link href="https://www.chess.com/member/jiujitsu1999">
            <p className="text-md">
                Play Chess
            </p>
            </Link>
            <Crown className="w-4 h-4 text-md ml-2" />
        </div>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          <div className=" w-full flex justify-between items-center">
            <Link href="https://hangman-five-iota.vercel.app/">
            <p className="text-md">
                Play Hangman
            </p>

            </Link>
            <PersonStanding className="w-4 h-4 text-md ml-2" />
        </div>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
          <div className=" w-full flex justify-between items-center">
            <Link href="https://connect-four-liart.vercel.app/">

            <p className="text-md">
                Play Connect 4
            </p>
            </Link>
            <Gamepad2 className="w-4 h-4 text-md ml-2" />
            </div>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    
    )
}