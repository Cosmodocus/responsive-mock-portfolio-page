import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full h-screen pt-80 md:mt-80'>
      <div className='text-3xl text-center'>Contact Me</div>
      <div className='flex items-center justify-center'>
        <form className='flex flex-col items-left justify-center gap-2'>
          <label htmlFor="username" className=''>Your Name:</label>
          <input type="text" name="" id="" className='md:w-[600px] w-[300px] py-2 px-1 border border-white rounded-md'/>
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="" id="" className='md:w-[600px] w-[300px] py-2 px-1 border border-white rounded-md'/>
          <label htmlFor="">Leave me a Message:</label>
          <textarea name="text-message" className='resize-none h-[200px] py-2 rounded-md'></textarea>
          <button className='border-white border py-2 px-4 my-2 w-[150px] items-center mx-auto rounded-md'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact