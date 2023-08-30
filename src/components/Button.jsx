const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-mono text-lg leading-none rounded-md text-white">
      {label}

      {iconURL && 
        <img className="ml-2 rounded-full w-6 h-6" src={iconURL} />
      }
    </button>
  )
}

export default Button