import React from 'react'
import Robot from '../assets/white-robot.jpg'

const About = () => {
  return (
    <section name='about' className='h-screen w-full items-center justify-center mx-auto'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center md:max-w-[1000px] mx-auto gap-10 px-10'>
          <div className='md:w-[400px] md:h-[400px] w-[300px] h-[300px] '>
            <img src={Robot} alt="profile-icon " className='rounded-xl border-white border-4' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl'>About Me</h1>
            <p className='md:text-xl'>I'm a Creative Bot that aids clients in Technology, Creativity, and Knowledge. It is my passion and life's goal to make sure my clients are provided with the best services.</p>
            <div className='flex gap-2'>
              <button className='border-2 border-white py-2 px-4 rounded-md '>Read More</button>
              <button className='border-2 border-white py-2 px-4 rounded-md '>CV Resume</button>
            </div>
          </div>
        </div>
     </section>
  )
}

export default About