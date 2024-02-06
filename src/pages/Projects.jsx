import React from 'react'
import Elephant from '../assets/elephant.jpg'
import Flower from '../assets/flower.jpg'
import Lion from '../assets/lion.jpg'
import Portrait from '../assets/portrait.jpg'

const Projects = () => {
  return (
    <section name='projects' className='w-full md:h-screen md:py-60'>
      <div className='text-4xl w-full text-center py-20 '>Projects</div>
      <div className='grid md:grid-cols-2 grid-cols-1 mx-20'>
        <div className='flex flex-col items-center justify-center py-2'>
          <h2 className='pb-2 text-2xl font-medium'>Project 1</h2>
          <img src={Elephant} alt="" className='w-[400px] h-[300px]  rounded-md border-2'/>
          <div className='flex gap-4'>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>GitHub</button>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>Live Demo</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='pb-2 text-2xl font-medium'>Project 2</h2>
          <img src={Flower} alt="" className='w-[400px] h-[300px] rounded-md border-2'/>
          <div className='flex gap-4'>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>GitHub</button>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>Live Demo</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='pb-2 text-2xl font-medium'>Project 3</h2>
          <img src={Lion} alt="" className='w-[400px] h-[300px] rounded-md border-2'/>
          <div className='flex gap-4'>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>GitHub</button>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>Live Demo</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='pb-2 text-2xl font-medium'>Project 4</h2>
          <img src={Portrait} alt=""className='w-[400px] h-[300px] rounded-md border-2'/>
          <div className='flex gap-4'>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>GitHub</button>
            <button className='border-white border-2 py-2 px-4 my-2 rounded-md'>Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects