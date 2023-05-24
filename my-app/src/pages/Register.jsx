import React from 'react'
import { Navbar } from '../components/Navbar'
import regImg from '../assets/login2.jpg'

function Register() {
  

  return (
    <div>
    <Navbar />
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src= {regImg} alt="" />

    <div className='flex justify-center items-center h-full'>
      <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg'>
        <h2 className='text-4xl font-bold text-center py-8'>Sign Up</h2>
        <div className='flex flex-col mb-4'>
          <label>Enter Email Address</label>
          <input className='border relative bg-gray-100 p-2' type="email" />
        </div>
        <div className='flex flex-col mb-4'>
          <label>Create Password</label>
          <input className='border relative bg-gray-100 p-2' type="password" />
        </div>
        <button className='w-full py-3 mt-8 bg-purple-700 hover:bg-purple-800 relative text-white rounded-lg font-semibold'>Create Account</button>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Register