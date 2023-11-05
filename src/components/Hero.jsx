import {BsGithub, BsLinkedin} from "react-icons/bs"
import { motion } from 'framer-motion'
import resume from "../assets/Chibueze Muoneke-Resume.pdf"

const Hero = () => {
  return (
    <div className='mt-32 flex items-center justify-between flex-col sm:flex-row'>
        <motion.div
            initial={{
                x: -1000,
                opacity: 0
            }}
            animate={{
                x:0,
                opacity: 1
            }}
            transition={{
                duration: 1,
                type: "spring"
            }}
        >
            <h2 className='text-[2rem] font-medium'>Hi i am Chibueze Muoneke</h2>
            <p className='max-w-[500px] py-8 text-[#706f6c]'> Your friendly neighborhood frontend developer with a growing intrest in mobile & backend development, I am a Computer Science student at Babcock University with a passion for problem solving. With a strong foundation in Computer Science and Engineering principles and programming languages such as JavaScript/TypeScript, Python and C++, I am constantly seeking opportunities to learn and apply my skills in new and innovative ways. </p>
            <motion.a 
                className='px-4 py-2 bg-[#1b1b18] text-white rounded-md' 
                whileHover={{scale: 1.05}}
                href={resume}
                target='blank'
            >Resume</motion.a>
            <div className='pt-8 flex items-center gap-6'>
                <a href="https://github.com/ChibuTheDev" target='blank'><BsGithub size={25}/></a>
                <a href="https://www.linkedin.com/in/chibueze-muoneke-9635431b3/" target='blank'><BsLinkedin size={25}/></a>
            </div>
        </motion.div>
        <motion.div 
            className='border-2 w-[400px] h-[400px] bg-[#1b1b18] z-[1] hidden sm:block relative shadow-2xl'
            initial={{
                x: 1000,
                opacity: 0
            }}
            animate={{
                x:0,
                opacity: 1
            }}
            transition={{
                duration: 1,
                type: "spring"
            }}
        >
            <p className='text-white text-center text-[12rem] absolute top-[16%] left-[10%] z-[11]'>CM</p>
            <div className='border-2 w-[400px] h-[400px]  mt-8 ml-8 border-[#1b1b18] absolute top-0'></div>
        </motion.div>
    </div>
  )
}

export default Hero