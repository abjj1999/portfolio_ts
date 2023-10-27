"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NavDrop } from "./NavDrop";
import NavLogo from "./Navlogo";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Projects", path: "/your-path" },
    { title: "Contact", path: "/your-path" },
    { title: "Resume", path: "/your-path" },
  ];

  return (
    <nav className="bg-slate-200/75 dark:bg-slate-800 w-full border-b-2 md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <NavLogo />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 dark:text-gray-200 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-700 dark:text-gray-200 ">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}

            <li className="w-60 lg:hidden   sm:flex md:hidden items-center justify-center  border  rounded-md ">
              <NavDrop />
            </li>
          </ul>
        </div>
        <div className="hidden lg:block md:block">
          <NavDrop />
        </div>
      </div>
    </nav>
  );
}
