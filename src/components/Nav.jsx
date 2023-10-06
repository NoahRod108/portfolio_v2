import { navLinks } from "../constants"
import { motion } from 'framer-motion'
import { navVariants, path01Variants, path02Variants, slideIn } from "../utils/motion"
import { useState } from "react"

const Nav = () => {
  const [animation, setAnimation] = useState("closed");
  const [drawer, setDrawer] = useState(false);

  const onClick = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
    setDrawer(drawer === false ? true : false)
  };

  if(drawer === true) {
    document.body.style.overflow = 'hidden'
  }

  if(drawer === false) {
    document.body.style.overflow = 'visible'
  }

  return (
    <header className="relative">
      {drawer && (
        <div className="absolute z-5 w-full h-[100vh] backdrop-blur-sm"></div>
      )}
      <motion.div 
        className={`fixed w-full h-screen bg-secondary ${drawer === false && 'hidden'}`}
        variants={slideIn('right','tween',0,0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false}}
      >
        <div className="flex justify-center items-center h-full">
          <ul className="flex flex-col justify-center gap-12 p-8">
            {navLinks.map((link) => (
              <li onClick={onClick} key={link.label}>
                <a href={link.href} className="font-mono leading-normal text-3xl text-dark-gray focus:text-teal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="padding-x py-8 z-10 w-full">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="flex justify-between items-center max-container">
            {/* Nav Logo */}
            <a href="/">
              <motion.h3 whileHover={{ scale: 1.1 }} className="text-2xl font-mono text-dark-gray hover:text-teal max-sm:hidden">Noah.Dev</motion.h3>
            </a>

            {/* Nav Links */}
            <ul className="flex flex-1 justify-end items-center gap-14 max-lg:hidden">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.label} 
                  whileHover={{ scale: 1.1 }}
                >
                  <a 
                    href={link.href} 
                    className="font-mono leading-normal text-lg text-dark-gray hover:text-teal">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile */}
            <div className="hidden relative max-lg:block cursor-pointer z-11">
              <button onClick={onClick}>
                <svg width="48" height="48" viewBox="0 0 24 24">
                  <motion.path
                    stroke="#999"
                    animate={animation}
                    variants={path01Variants}
                  />
                  <motion.path
                    stroke="#999"
                    animate={animation}
                    variants={path02Variants}
                  />
                </svg>
              </button>
            </div>
        </motion.nav>
      </div>
    </header>
  )
}

export default Nav