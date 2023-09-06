import { motion } from 'framer-motion'

const Button = ({ label, iconURL }) => {
  return (
    <motion.button 
      className="flex justify-center items-center gap-2 px-7 py-4 border border-teal font-mono text-lg leading-none rounded-md text-dark-gray hover:btn-animate"
      whileHover={{ scale: 1.05 }}
    >
      {label}

      {iconURL && 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="default-icon ml-2">
          <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
          <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
        </svg>
      }
    </motion.button>
  )
}

export default Button