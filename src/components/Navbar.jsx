import { useState } from 'react'
import {BsPlus} from "react-icons/bs"
import { motion } from 'framer-motion'

const Navbar = () => {
    const [ isOpen,setIsOpen ] = useState(false)
  return (
    <motion.nav 
        className='flex items-center justify-between py-6'
        initial={{
            y:-80,
        }}
        animate={{
            y:0,
            opacity:1
        }}
        transition={{
            duration: 1,
            type: "spring"
        }}
    >
        <h3 className='font-semibold text-2xl' id='home'>Chibu</h3>
        <ul className='sm:flex items-center gap-6 hidden'>
            <li><a href="#home" className='text-[#706f6c] hover:text-[#1b1b18]'>Home</a></li>
            <li><a href="#about" className='text-[#706f6c] hover:text-[#1b1b18]'>About</a></li>
            <li><a href="#projects" className='text-[#706f6c] hover:text-[#1b1b18]'>Projects</a></li>
            <li><a href="#contact" className='text-[#706f6c] hover:text-[#1b1b18]'>Contact</a></li>
        </ul>
        <div className='flex flex-col gap-4 sm:hidden'>
            <p 
                className='sm:hidden flex items-center text-[#706f6c]'
                onClick={() => setIsOpen(!isOpen)}    
            >Menu<BsPlus size={20}/></p>
            {isOpen && (
                <motion.ul 
                    className='flex flex-col items-center gap-4 sm:hidden absolute top-[4rem] right-[1rem] bg-white shadow-2xl p-4 rounded-md'
                    initial={{
                        x: 100
                    }}
                    animate={{
                        x:0
                    }}
                >
                <li><a href="#home" className='text-[#706f6c] hover:text-[#1b1b18]'>Home</a></li>
                <li><a href="#about" className='text-[#706f6c] hover:text-[#1b1b18]'>About</a></li>
                <li><a href="#projects" className='text-[#706f6c] hover:text-[#1b1b18]'>Projects</a></li>
                <li><a href="#contact" className='text-[#706f6c] hover:text-[#1b1b18]'>Contact</a></li>
            </motion.ul>
            )}
        </div>
    </motion.nav>
  )
}

export default Navbar