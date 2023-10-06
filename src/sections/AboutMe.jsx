import { skillIcons } from "../constants"
import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion"

const AboutMe = () => {
  return (
    <section id="aboutMe" className="max-container flex justify-center flex-col w-full min-h-screen gap-10">
      <motion.h2 className="flex text-4xl font-robot text-white font-bold lg:max-w-lg">About Me</motion.h2>

      <div className="flex justify-between w-full xl:flex-row flex-col gap-10">
        <motion.div
          variants={fadeIn('up', 'tween', 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          <p className="xl:max-w-lg w-full info-text">
            Starting out as an electrical engineer I found myself developing a deep passion for coding. After a degree change, I started taking up many new interests in the field of web development. Today, I am working at my nearby university as a solution engineer. I help manage and develop our in-house web applications. On a daily basis, I work with <span className="text-teal">HTML</span> , <span className="text-teal">CSS</span>, <span className="text-teal">JavaScript</span>, <span className="text-teal">PHP</span>, and <span className="text-teal">MySQL</span>.
          </p>

          <p className="mt-4 xl:max-w-lg info-text">
            My main focus is working with <span className="text-teal">React</span> and <span className="text-teal">Next.js</span>. I aspire to be a <span className="text-teal">full-stack developer</span>. In my free time, I work on personal projects and take courses to develop my skills.
          </p>

          <p className="mt-4 xl:max-w-lg info-text">
            Other than coding, I’m usually playing virtual or tabletop games, camping, or finding somewhere new to explore.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          variants={fadeIn('up', 'tween', 0, 1)}
        >
          <h3 className="text-xl font-robot text-white font-bold lg:max-w-lg"><span className="text-teal">Bachelor of Science in Computer Information Technology</span> @ Purdue University Northwest</h3>
          <p className="font-mono text-dark-gray mt-2">2015 - 2020</p>
        </motion.div>
      </div>

      <div className="flex flex-col justify-center items-center col-span-2 gap-8">
        <motion.h3
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          variants={fadeIn('up', 'tween', 0, 1)}
          className="text-3xl font-robot text-white font-bold lg:max-w-lg"
        >
          Skills
        </motion.h3>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          variants={fadeIn('up', 'tween', 0, 1)}
          className="flex flex-wrap xl:justify-start justify-center items-center gap-16"
        >
          {skillIcons.map((icon) => (
            <li key={icon.label}
              className="w-[64px]"
            >
              <img src={icon.icon} alt={icon.label}/>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default AboutMe