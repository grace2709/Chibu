import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4dvkx7r', 'template_fvts9mp', form.current, '9LdRlX0gYKzOauxbx')
      .then((result) => {
          console.log(result.text);
          toast.success('Message Sent')
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div>
        <Toaster position='top-right'/>
        <div id='contact'>
            <h3 className='text-2xl font-semibold'>Contact Me</h3>
            <p className='text-[#706f6c]'>Make we yarn</p>
        </div>
        <form className='py-16' ref={form} onSubmit={sendEmail}>
            <div className=''>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='user_name' className='border-[1px] w-full px-4 py-2 my-4 outline-none focus:border-[#1b1b18]'  placeholder='Enter your name' required/>
            </div>
            <div className=''>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='user_email' className='border-[1px] w-full px-4 py-2 my-4 outline-none focus:border-[#1b1b18]' placeholder='Enter your email' required/>
            </div>
            <div className='flex gap-4 flex-col'>
                <label htmlFor="message">Get in touch with me</label>
                <textarea name="message" id="message" cols="30" rows="10" className='border-[1px] w-full px-4 py-2 my-4 outline-none focus:border-[#1b1b18]' placeholder='Send me a message' required></textarea>
            </div>
            <motion.button 
            className='bg-[#1b1b18] text-white px-4 py-2 rounded-md'
            whileHover={{scale: 1.05}}
            >Send Message</motion.button>
        </form>
    </div>
  )
}

export default Contact