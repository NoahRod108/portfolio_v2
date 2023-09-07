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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda, ipsum, tempora sunt omnis iste, ab neque blanditiis laudantium expedita sit sed a at! Nihil consequatur nobis labore velit laudantium.
        </p>

        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae dolorum. Quis facilis nulla eligendi qui odio, eos laborum itaque?
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
        <img src={coffee} alt="Coffee" />
      </motion.div>

    </section>
  )
}

export default AboutMe