"use client";

import { CatIcon, Download, Dumbbell, FigmaIcon, HelpCircle, Lightbulb, Pizza, PizzaIcon, Receipt, TentTree } from "lucide-react";
import { DiJavascript1, DiMongodb, DiMysql, DiPhp, DiPython, DiReact } from "react-icons/di";
import { BiLogoCss3, BiLogoHtml5, BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs, FaPython, FaQuestionCircle } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiExpress, SiNextdotjs, SiRedux, SiSolidity, SiTypescript } from "react-icons/si";
import { Separator } from "@/components/ui/separator";
import { GiKimono, GiLongAntennaeBug } from "react-icons/gi";
import { BsBootstrapFill } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className=" mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white flex items-center justify-center">
          Skills
          <Lightbulb className="w-8 h-8 inline-block ml-2" />
        </h2>
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-sm font-semibold bg-primary-600 rounded-full dark:text-white text-black px-3 py-1.5 mr-1">
              Download Resume
            </span>
            <Download className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center justify-center flex-wrap mb-5 gap-2">
          <DiJavascript1 className="w-14 h-14 mx-2 my-2 text-yellow-300 animate-pulse" />
          <BiLogoHtml5 className="w-14 h-14 ml-2 mx-2 text-orange-500 animate-pulse" />
          <BiLogoCss3 className="w-14 h-14 ml-2 mx-2 text-blue-500 animate-pulse" />
          <DiReact className="w-14 h-14 ml-2 mx-2 text-blue-500 animate-pulse" />
          <FaNodeJs className="w-14 h-14 ml-2 mx-2 text-green-500 animate-pulse" />
          <SiNextdotjs className="w-14 h-14 ml-2 mx-2 text-slate-400 animate-pulse" />
          <BiLogoTailwindCss className="w-14 h-14 ml-2 mx-2 text-sky-500 animate-pulse" />
          <SiExpress className="w-14 h-14 ml-2 mx-2 text-gray-500 animate-pulse" />
          <DiMongodb className="w-14 h-14 ml-2 mx-2 text-green-500 animate-pulse" />
          <FaPython className="w-14 h-14 ml-2 mx-2 text-blue-500 animate-pulse" />
          <SiSolidity className="w-14 h-14 ml-2 mx-2 text-gray-500 animate-pulse" />
          <BsBootstrapFill className="w-14 h-14 ml-2 mx-2 text-purple-500 animate-pulse" />
          <SiDjango className="w-14 h-14 ml-2 mx-2 text-green-500 animate-pulse" />
          <SiRedux className="w-14 h-14 ml-2 mx-2 text-purple-500 animate-pulse" />
          <DiPhp className="w-14 h-14 ml-2 mx-2 text-gray-500 animate-pulse" />
          <SiCplusplus className="w-14 h-14 ml-2 mx-2 text-blue-500 animate-pulse" />
          <DiMysql className="w-14 h-14 ml-2 mx-2 text-yellow-400 animate-pulse" />
          <SiTypescript className="w-14 h-14 ml-2 mx-2 text-blue-500 animate-pulse" />

        </div>

        <Separator />
      </div>
      <div className="mx-5 my-4">
        <div className="">
          <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <h2 className=" text-center mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What Else!
          <GiLongAntennaeBug className="w-8 h-8 inline-block ml-2 " />
              </h2>
              <div className="grid pt-8 text-left border  md:gap-16  md:grid-cols-2 bg-gray-200 dark:bg-gray-900 rounded-md">
                <div className="p-2">
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <HelpCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"/>
                      Hobbies?
                    </h3>
                    <p className="text-gray-800 dark:text-gray-400">
                        I love to <span className="text-sky-600 dark:text-sky-500">Workout</span> <Dumbbell className="w-5 h-5 mx-1 inline-block text-black dark:text-white" />, and train <span className="text-sky-600 dark:text-sky-500">Brazilian Jiu Jitsu</span> <GiKimono className="w-5 h-5 mx-1 inline-block text-black dark:text-white" />. 
                        I also love to go on <span className="text-sky-600 dark:text-sky-500">hikes</span> <TentTree className="w-5 h-5 mx-1 inline-block text-black dark:text-white" /> and explore the outdoors.
                        
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <HelpCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"/>
                      Pets?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        I have two cats named <span className="text-pink-600 dark:text-pink-500">Sprinkles</span> and <span className="text-pink-600 dark:text-pink-500">Snowball</span> <CatIcon className="w-5 h-5 mx-1 inline-block text-black dark:text-white" />.
                        <span className="text-pink-600 dark:text-pink-500">Sprinkles</span> is 4 years old and <span className="text-pink-600 dark:text-pink-500">Snowball</span> is 2 years old.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <HelpCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"/>
                      Food?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        I love to cook and eat all types of food. I love to try new foods and explore new flavors. But you can't go wrong with a good <span className="text-orange-600 dark:text-orange-500">Pizza </span>
                         <PizzaIcon className="w-5 h-5 mx-1 inline-block text-black dark:text-white" />.
                    </p>
                  </div>
                

                  
                  
                </div>
                <div className="p-2">
                <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <HelpCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"/>
                      Books
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 flex flex-col">
                        Books I've read recently:
                        <div className="ml-3">
                            - <span className="text-sky-600 dark:text-sky-500">The Alchemist</span> by Paulo Coelho
                        </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
