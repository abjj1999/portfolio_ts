import { Wand2 } from "lucide-react";
import { ProjectSingle } from "./_comps/project";
import {projects} from "@/lib/projects"
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
      </section>
    </div>
  );
};

export default ProjectsPage;
