import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className=' text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#8F00FF]'>TechReach</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-semibold'>Home</li>
        <li className='p-4 font-semibold'>Jobs</li>
        <li className='p-4 whitespace-nowrap font-semibold'>About Us</li>
        <li className='p-4 whitespace-nowrap font-semibold'>My Profile</li>
        <li className='p-4 whitespace-nowrap font-semibold'>Help Center</li>
      </ul>
    <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold text-[#8F00FF] m-4'>TechReach</h1>
    <ul className='uppercase p-4 '>
      <li className='p-4 border-b border-gray-600 '>Home</li>
      <li className='p-4 border-b border-gray-600'>Jobs</li>
      <li className='p-4 border-b border-gray-600'>About Us</li>
      <li className='p-4 border-b border-gray-600'>My Profile</li>
      <li className='p-4'>Help Center</li>
    </ul>
    </div>
  </div>
  )
}
