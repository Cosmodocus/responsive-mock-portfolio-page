import React from 'react'
import { LuPenTool } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";
import { LiaToolboxSolid } from "react-icons/lia";
import { TbToolsKitchen3 } from "react-icons/tb";
import { GrGamepad } from "react-icons/gr";
import { AiOutlineRobot } from "react-icons/ai";



const Skills = () => {
  return (
      <section name='skills' className='w-full md:h-screen mb-40'>
        <h1 className='text-4xl w-full text-center py-20 '>Skills</h1>
        <div className='mx-auto flex items-center justify-center'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-20  md:gap-40'>
            <div className='flex flex-col items-center border-4 rounded-md p-12 hover:scale-[1.1] z-1 '>
              <h1 className='text-2xl'>Design</h1>
              <LuPenTool  size={80}/>
            </div>
            <div className='flex flex-col items-center border-4 rounded-md p-12 hover:scale-[1.1]'>
              <h1 className='text-2xl'>Repair</h1>
              <AiOutlineTool size={80}/>
            </div>
            <div className='flex flex-col items-center border-4 rounded-md p-12 hover:scale-[1.1]'>
              <h1 className='text-2xl'>Adaptibility</h1>
              <LiaToolboxSolid size={80} />
            </div>
            <div className='flex flex-col items-center border-4 rounded-md p-12 hover:scale-[1.1]'>
              <h1 className='text-2xl'>Consume</h1>
              <TbToolsKitchen3 size={80} />
            </div>
            <div className='flex flex-col items-center border-4 rounded-md p-12 hover:scale-[1.1]'>
              <h1 className='text-2xl'>Game Theory</h1>
              <GrGamepad size={80}/>
            </div>
            <div className='flex flex-col items-center border-4 rounded-md p-12 hover:scale-[1.1]'>
              <h1 className='text-2xl'>AI Assistance</h1>
              <AiOutlineRobot size={80}/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills