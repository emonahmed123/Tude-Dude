import React from 'react'
import Logo from '../../assests/logo.png'
import { BiUserCir,BiChevronDown } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
const NavBar = () => {
  return (
    <div className='max-w-[1240px] flex mx-auto h-24 justify-between items-center p-4' >
          
        <img className='w-[160px] ' src={Logo} />
       


       <ul className='flex gap-8 items-center '  >
        <li className='hidden md:block text-[#80028026] font-semibold text-[18px]'>My Assignment </li>
        <li className='hidden md:block text-[#80028026] font-semibold text-[18px]' >Chat With Mentor </li>
        <li className={' py-3 px-5 md:text-[#800080] justify-between items-center flex  bg-[#800080] text-white md:bg-white rounded md:rounded-none  font-semibold md:font-bold text-sm md:text-[18px] gap-1 '} ><CgProfile className='hidden md:block'  size={20}/> ProfileName <BiChevronDown/> </li>
       
       </ul>
        
    </div>
  )
}

export default NavBar
