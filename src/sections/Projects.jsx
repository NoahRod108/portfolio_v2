import { useState } from "react";
import { projects } from "../constants";
import PersonalProjects from "../components/PersonalProjects";

const Projects = () => {
  const [active, setActive] = useState("Get Home");

  return (
    <section
      id="projects"
      className="flex justify-center flex-col max-container min-h-screen w-full gap-8"
    >
      <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">
        Projects
      </h2>
      <div className="flex flex-col gap-5 min-h-[70vh] lg:flex-row">
        {projects.map((project, index) => (
          <PersonalProjects
            key={project.name}
            index={index}
            {...project}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
