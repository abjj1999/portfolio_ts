"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Circle, GithubIcon, Link2Icon, Projector } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

 

interface ProjectProps {
  title: string;
  desc: string;
  liveUrl: string;
  githubUrl: string;
  img: string;
  tech: string[];

}

export const ProjectSingle = ({title, desc, liveUrl, githubUrl, img, tech}: ProjectProps) => {
    return (
        <div className="mb-2 border rounded-lg p-2 bg-slate-100 dark:bg-slate-800">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={img}
                alt="Project Image"
                width={500}
                height={300}
              />  
             
            </div>
            <h5 className="mb-4 text-xl font-bold">
                {title}
                <Projector className="w-6 h-6 inline-block ml-2 text-rose-500" />
            </h5>
            <div className="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
              {tech.map((item, idx) => (
                <span key={idx} className="mr-2 bg-gray-500 dark:bg-gray-200 text-white dark:text-black p-1.5 text-sm font-semibold font-mono rounded-lg">
                  {item}
                </span>
              )
              )}

            </div>
            <p className="text-neutral-600 dark:text-neutral-200 mb-2">
              {desc}

            </p>
            <Separator />
            <div className="mt-2 flex items-center ">
              {/* buttons */}
              <Button variant="ghost" className="border flex items-center mr-2">
                <Link href={liveUrl} className="flex items-center  text-lg">

                Live link
                <Circle className="w-3 h-3 ml-2 text-red-700 bg-red-700 rounded-full animate-pulse" />
                </Link>
              </Button>
              <Button variant="ghost" className="border ">
                <Link href={githubUrl} className="flex items-center text-lg">
                Repo
                <GithubIcon className="w-4 h-4 ml-2 " />

                </Link>
              </Button>
            </div>
          </div>
    )
}