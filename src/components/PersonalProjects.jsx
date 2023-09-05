import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion"
import { github, external } from "../assets/icons";

const PersonalProjects = ({ name, img, desc, href, githubLink, tags, active, handleClick, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: false}}
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className={`relative ${active === name ? 'lg:flex-[2.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(name)}
    >
      <img src={img} alt={name} 
        className='absolute w-full h-full object-cover rounded-[24px]'
      />
      {active === name &&(
        <div 
        className='absolute p-8 justify-start w-full bottom-0 flex-col bg-[rgba(0,0,0,0.8)] rounded-b-[24px] font-robot text-white'>
          <div className='flex justify-between'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <div className='flex gap-4'>
              <a href={href}><img src={external} alt="external" width={32} height={32} /></a>
              <a href={githubLink}><img src={github} alt="github" width={32} height={32} /></a>
            </div>
          </div>

          <div className='mt-6 info-text'>
            <p>{desc}</p>
          </div>

          <ul className='flex gap-4 justify-end mt-4'>
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