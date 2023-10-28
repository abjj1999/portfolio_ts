import { Sparkle, Wand2 } from "lucide-react";
import { ProjectSingle } from "./_comps/project";
import {projects} from "@/lib/projects"
import { Separator } from "@/components/ui/separator";
const ProjectsPage = () => {
  return (
    <div className=" ">
      {/* Section: Design Block */}
      <section className=" text-center lg:text-left py-5 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold">
          <Wand2 className="w-8 h-8 inline-block mr-2" />
          My Projects
          <Wand2 className="w-8 h-8 inline-block ml-2" />
        </h2>
        <div className="grid gap-x-6 lg:grid-cols-3">
            {
              projects.map(({id, title, desc, tech, liveUrl, githubUrl, img}) => (
                <ProjectSingle key={id} title={title}
                desc={desc}
                tech={tech}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
                img={img}
                />
              ))
            }
          
          
        </div>
      <Separator />
      <div className="mt-10">
        <h2 className=" m-4 text-center text-xl font-semibold">
          <Sparkle className="w-8 h-8 inline-block mr-2" />
          More Ideas Coming Soon
          <Sparkle className="w-8 h-8 inline-block ml-2" />
        </h2>
      </div>
            <p className="text-center text-lg  text-neutral-600 dark:text-neutral-200 border bg-slate-200 rounded-xl p-4 dark:bg-slate-800">
              I am always working on new ideas and projects. I will be adding them here as soon as they are ready. <br />
              One of the idea is to build a <span className="font-semibold">Portfolio Builder</span> for college students.
              <br />
              <span className="font-semibold text-2xl underline">Stay Tuned!</span>

            </p>
      </section>
    </div>
  );
};

export default ProjectsPage;
