import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#8F00FF] font-bold p-2 text-xl'>Empowering Techies Everywhere: Find Your Dream Job Near You!</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Unleash Your Superpowers.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Calling</p>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Software Developers', 'Data Scientists', 'Cybersecurity Specialists', 'UX/UI Designers']} typeSpeed={140} backSpeed={140} loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Discover job opportunities that match your unique tech skills and talents. From software developers to UX designers, we've got you covered.</p>
        <button className='bg-[#8F00FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#F5F6FB]'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero