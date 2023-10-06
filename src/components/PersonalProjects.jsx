import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion"

const PersonalProjects = ({ name, img, desc, href, githubLink, tags, active, handleClick, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      variants={fadeIn('up', 'spring', index * 0.2, 1)}
      className={`relative ${active === name ? 'lg:flex-[2.5] flex-[10] cursor-default' : 'lg:flex-[0.5] flex-[2] cursor-pointer'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.5s] ease-out-flex`}
      onClick={() => handleClick(name)}
      whileHover={active !== name ?{ scale: 1.02 } : {scale: 1}}
    >
      <img src={img} alt={name} 
        className='absolute w-full h-full object-cover rounded-[24px]'
      />
      {active === name &&(
        <div 
          className='absolute p-8 justify-start w-full bottom-0 flex-col bg-[rgba(0,0,0,0.8)] rounded-b-[24px] max-sm:rounded-[24px] max-sm:h-full font-robot text-white'
        >
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <div className='flex gap-4'>
              {/* External link icon - Needed to change styles, so no image is used */}
              <motion.a 
                href={href}
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="project-icon">
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </motion.a>
              
              {githubLink !== "none" && (
                <motion.a 
                href={githubLink}
                whileHover={{ scale: 1.2 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="project-icon"
                  >
                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                  </svg>
                </motion.a>
              )}
            </div>
          </div>

          <div className='mt-6 info-text max-sm:text-sm max-[280px]:hidden'>
            <p>{desc}</p>
          </div>

          <ul className='flex flex-wrap max-sm:gap-y-0 max-[280px]:hidden gap-4 justify-end mt-4 w-full'>
            {tags.map((tag, index) => (
              <li key={index} className='text-teal font-mono mt-2'>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {active !== name &&(
        <div className='absolute w-full h-full bg-[rgba(0,0,0,0.8)] rounded-[24px]'></div>
      )}
    </motion.div>
  )
}

export default PersonalProjects