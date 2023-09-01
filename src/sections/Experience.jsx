import { arrowRight } from "../assets/icons"

const Experience = () => {
  return (
    <section id="experience" className="max-container w-full flex flex-1 xl:flex-row flex-col justify-center gap-8">
      <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">Work Experience</h2>
      <div>
        <h3 className="text-xl font-robot text-white font-bold lg:max-w-lg">Solutions Engineer @ Valparaiso University</h3>
        <p className="font-mono text-dark-gray">2020 - Present</p>
        <p className="info-text mt-4">
          Currently, I am working as a Solutions Engineer at Valparaiso University. On a daily basis, I work with colleagues and students to create a better web experience. I also handle a few more responsibilities outside of web development. Below are a few examples of what I do. 
        </p>
      </div>

      <div className="px-8">
        <ul className="flex flex-col gap-4 text-dark-gray">
          <li className="flex items-center">
            <img src={arrowRight} />
            Developed, maintained, and shipped production code for in-house web applications and web servers. I primarily use HTML, CSS, PHP, JavaScript, jQuery, and MySQL
          </li>
          <li className="flex items-center">
            <img src={arrowRight} />
            Meet with staff and faculty to discuss new features and give guidance on a technical level.
          </li>
          <li className="flex items-center">
            <img src={arrowRight} />
            Lead and assist in new integrations to intrdouce new tools to our university.
          </li>
          <li className="flex items-center">
            <img src={arrowRight} />
            Google admin for organization and help manage more complex features that Google provides like SAML authentication.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience