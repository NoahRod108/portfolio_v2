import React from 'react'

const Footer = () => {
  return (
    <footer className='max-container flex flex-col w-[450px] justify-center items-center text-dark-gray text-sm gap-4 py-8 text-center'>
        <div>
            Designed & Built  by Noah Rodriguez
        </div>
        <div>
            <p>
                Coded in Visual Studio Code by me. Built with <span className='text-teal'>React</span> and <span className='text-teal'>Tailwind CSS</span>, deployed with <span className='text-teal'>Vercel</span>.
            </p>
        </div>
    </footer>
  )
}

export default Footer