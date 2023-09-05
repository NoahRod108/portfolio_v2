import Button from "../components/Button"
import { download } from "../assets/icons"
import { socialLinks } from "../constants"
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion"

const Hero = () => {
  return (
    <section id="hero" className="w-full flex flex-1 xl:flex-row flex-col justify-center min-h-screen max-container">
      <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className="flex flex-col justify-center items-start w-full xl:w-2/4 max-xl:padding-x">
        <motion.p
        variants={textVariant(1.1)}
        className="text-xl font-mono font-bold text-teal px-1">Hello, I am</motion.p>
        <motion.h1
        variants={textVariant(1.2)}
        className="mt-2 font-robot text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-white">
          Noah Rodriguez <br />
          <span className="text-dark-gray">Web Developer</span>
        </motion.h1>
        <motion.p
        variants={textVariant(1.3)}
        className="info-text my-8 px-1 text-xl">I&apos;m a devloper with a deep passion for bringing the web to life. Currently, I&apos;m focused on building <span className="text-teal">React (Next.js)</span> applications.
        </motion.p>
        
        <motion.div
        variants={textVariant(1.4)}
        className="flex justify-center items-center gap-16">
          <Button 
            label="Download Resume"
            iconURL={download}
          />

          <ul className="flex justify-center items-center gap-8">
            {socialLinks.map((icon) => (
              <li key={icon.label}>
                <a href={icon.href}><img src={icon.icon} alt={icon.label} width={38} height={38}/></a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero