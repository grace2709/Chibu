import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration: 1
        }}
    >
        <div className='pb-16' id='about'>
            <h3 className='text-2xl font-semibold'>About me</h3>
            <p className='text-[#706f6c]'>A few things about me</p>
        </div>
        <p className='pb-16'> In addition to my academic pursuits, I have participated in numerous hackathons. I am also a team lead at the Google Developer Student Club at my school. All in all i'm team player who enjoys collaborating with others and sharing knowledge.  Aside from writing software, I spend the majority of my days reading, watching anime, growing, and experimenting with new productivity hacks.

I am excited to continue learning and growing as a software engineer, and I am eager to apply my skills and knowledge to tackle challenging problems and make a positive impact on the world..</p>
    </motion.div>
  )
}

export default About