import React, {useState} from 'react'
import { Link } from 'react-scroll';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  
  return (<>
    <header className='w-full border-b-[0.5px] border-white fixed opacity-100 bg-black z-100 '>
      <nav className='flex justify-between mx-10 my-5 items-center '>
        <div className='text-5xl font-medium'>Logo</div>
        
        
        {/*MAIN DEFAULT NAVBAR MENU LOGIC */}
        <ul className='hidden md:flex gap-6'>
          <li className='cursor-pointer hover:text-gray-500 '>
            <Link 
                    to='home' 
                    smooth={true} 
                    offset={50} 
                    duration={500}>
                    Home
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link 
                    to='about' 
                    smooth={true} 
                    offset={50} 
                    duration={500}>
                    About
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link   to='skills' 
                    smooth={true} 
                    offset={50} 
                    duration={500}>
                    Skills
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link   to='projects' 
                    smooth={true} 
                    offset={50} 
                    duration={500}>
                    Projects
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link   to='contact' 
                    smooth={true} 
                    offset={50} 
                    duration={500}>
                    Contact
            </Link>
          </li>  
        </ul>  



        {/* MOBILE RESPONSIVE MENU LOGIC */}
        <div onClick={handleNav} className='md:hidden block cursor-pointer'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <ul className={nav ? 'fixed top-0 left-0 w-[40%] pt-20 border-r-2 z-100 border-r-white bg-black flex-col flex h-screen items-center gap-5 py-10 transition-all duration-[0.5s] ease-in-out opacity-100' :
      'fixed top-0 left-[-100%] w-[40%] pt-20 border-r-2 border-r-white z-100 bg-black flex-col flex h-screen items-center gap-5 py-10 transition-all duration-[0.5s] ease-in-out opacity-100'}>
          <li className='cursor-pointer hover:text-gray-500' >
            <Link 
                    to='home' 
                    smooth={true} 
                    offset={50} 
                    duration={500}
                    onClick={closeNav}>
                    Home
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link to='about' smooth={true} 
                    offset={50} 
                    duration={500}
                    onClick={closeNav}>
                    About
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link to='skills' smooth={true} 
                    offset={50} 
                    duration={500}
                    onClick={closeNav}>
                    Skills
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link to='projects' smooth={true} 
                    offset={50} 
                    duration={500}
                    onClick={closeNav}>
                    Projects
            </Link>
          </li>  
          <li className='cursor-pointer hover:text-gray-500'>
            <Link to='contact' smooth={true} 
                    offset={50} 
                    duration={500}
                    onClick={closeNav}>
                    Contact
            </Link>
          </li> 
        </ul>
      </nav>  
    </header> 
    </>)
}

export default Navbar