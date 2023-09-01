import { projects } from "../constants"
import PersonalProjects from '../components/PersonalProjects';

const Projects = () => {
  return (
    <section className="flex flex-col max-container w-full gap-8">
      <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">Projects</h2>
      <ul className="flex flex-col gap-32">
      {projects.map((project) => (
        <li key={project.name}>
          <PersonalProjects
          name={project.name}
          href={project.href}
          github={project.github}
          projectImg={project.img}
          desc={project.desc}
          tags={project.tags}
        />
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Projects