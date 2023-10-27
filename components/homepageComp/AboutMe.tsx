import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="mt-10">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light  sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className=" dark:text-white font-semibold gap-2 p-3 rounded-md font-epilogue text-[20px]">
              My name is <span className="text-red-600">Abdullah </span> or{" "}
              <span className="text-red-600">AB</span> . <br />I am a{" "}
              <span className="text-blue-600">Full-Stack Developer </span>
              from <span className="text-red-600">Houston, TX</span>. <br />I am
              currently a <span className="text-blue-600">Student</span> at{" "}
              <span className="text-red-600">University of Houston-Downtown</span>.{" "}
              Studying <span className="text-blue-600">Computer Science</span>.
              <br />I have a passion for{" "}
              <span className="text-blue-600">Web Development</span> and{" "}
              <span className="text-blue-600">Software Engineering</span>.{" "}
              <br />I am currently working on achieving my{" "}
              <span className="text-blue-600">AWS DEV certifcate</span>.<br />
              I am also working on Developing new and exciting full stack
              projects. <br />

            </p>
            <Button variant="outline" className="mt-2 dark:text-white">
                <p className="">
                    Check out my projects
                </p>
                <ChevronRight className="w-6 h-6" />
            </Button>
          
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg object-contain"
            width={500}
            height={500}
            src="/profile_pic.jpg"
            alt="office content 1"
          />
            <Image
                className="mt-4 w-full lg:mt-16 rounded-lg object-contain"
                width={500}
                height={500}
                src="/anon.jpg"
                alt="office content 1"
            />
          
        </div>
      </div>
    </section>
  );
};
