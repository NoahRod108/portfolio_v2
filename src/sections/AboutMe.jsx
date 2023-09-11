import { coffee } from "../assets/images"
import { skillIcons } from "../constants"
import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion"

const AboutMe = () => {
  return (
    <section id="aboutMe" className="max-container xl:grid xl:grid-cols-2 flex flex-col justify-center items-center w-full min-h-screen gap-10">
      <motion.div
        variants={fadeIn('up', 'tween', 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >
        <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">
          About Me
        </h2>
        <p className="mt-8 lg:max-w-lg info-text">
          Starting out as an electrical engineer I found myself developing a deep passion for coding. After a degree change, I started taking up many new interests in the field of web development. Today, I am working at my nearby university as a solution engineer. I help manage and develop our in-house web applications. On a daily basis, I work with <span className="text-teal">HTML</span> , <span className="text-teal">CSS</span>, <span className="text-teal">JavaScript</span>, <span className="text-teal">PHP</span>, and <span className="text-teal">MySQL</span>.
        </p>

        <p className="mt-4 lg:max-w-lg info-text">
          My main focus is working with <span className="text-teal">React</span> and <span className="text-teal">Next.js</span>. I aspire to be a <span className="text-teal">full-stack developer</span> and take one step at a time to reach that goal. In my free time, I work on personal projects and take courses to develop my skills.
        </p>

        <p className="mt-4 lg:max-w-lg info-text">
          Other than coding, I’m usually playing virtual or tabletop games, camping, or finding somewhere new to explore.
        </p>
        <div className="col-span-2 mt-8">
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
          className="flex flex-wrap justify-start items-center mt-8 gap-16"
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
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        variants={fadeIn('up', 'tween', 0, 1)}
      >
        <img src={coffee} alt="Coffee" className="w-full" />
      </motion.div>

    </section>
  )
}

export default AboutMe