import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div>
        <div className='' id='projects'>
            <h3 className='text-2xl font-semibold'>Projects</h3>
            <p className='text-[#706f6c]'>A few selected projects</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 py-16 w-full'>
            <div className='border-[1px] border-[#1b1b18] py-8 px-4'>
                <h3 className='text-[20px]'>Pig Game app</h3>
                <p className='py-4 text-[#706f6c]'> A fun game for friends to play. Developed to improve my knowledge of Javascript. Working on implemnting realtime connection with web sockets for realtime online play. Best viewed on desktop 😎 </p>
                <div className='flex gap-2'>
                    <a href='https://pig-game-alpha-nine.vercel.app/' target='blank' className='bg-[#1b1b18] text-white px-4 py-2 rounded-md'>Live</a>
                    <a href='#' className='border-[#1b1b18] border-[1px] px-4 py-2 rounded-md'>Code</a>
                </div>
            </div>
            <div className='border-[1px] border-[#1b1b18] py-8 px-4'>
                <h3 className='text-[20px]'>SmartHome Website</h3>
                <p className='py-4 text-[#706f6c]'> A website for a smart home product called... Smart Home. Made with html css and Vanilla Javascript.</p>
                <div className='flex gap-2'>
                    <a href='https://smart-home-bolaji-git-main-osaro123.vercel.app/' className='bg-[#1b1b18] text-white px-4 py-2 rounded-md'>Live</a>
                    <a href='#' className='border-[#1b1b18] border-[1px] px-4 py-2 rounded-md'>Code</a>
                </div>
            </div>
            <div className='border-[1px] border-[#1b1b18] py-8 px-8'>
                <h3 className='text-[20px]'>My Portfolio Website</h3>
                <p className='py-4 text-[#706f6c]'>My beautiful Portfolio website. .</p>
                <div className='flex gap-2'>
                    <a className='bg-[#1b1b18] text-white px-4 py-2 rounded-md'>Live</a>
                    <a className='border-[#1b1b18] border-[1px] px-4 py-2 rounded-md'>Code</a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Project