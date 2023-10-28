import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4 bg-slate-200/75 dark:bg-slate-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
            © 2023 Abdullah A
          . All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <Link href="https://www.linkedin.com/in/abdullah-al-hilfi/">
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Linkedin className="w-6 h-6" />
          </Button>

        </Link>
        <Link href="https://github.com/abjj1999" >
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Github className="w-6 h-6" />
          </Button>
        </Link>
        <Link href="mailto:abdullahalhilfi21@gmail.com">
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Mail className="w-6 h-6" />
          </Button>

        </Link>
        <Link href="tel:3468121212" >
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </Link>
          
        </div>
      </div>
    </footer>
  );
};
