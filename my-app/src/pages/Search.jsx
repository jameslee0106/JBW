import React from 'react'
import { Navbar } from '../components/Navbar'

function Search() {
  return (
    <div>
    <Navbar />
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <div className='flex justify-center items-center h-full'>
      <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg'>
        <h2 className='text-4xl font-bold text-center py-8'>Search</h2>
        <div className='flex flex-col mb-4'>
          <label>Occupation</label>
          <input className='border relative bg-gray-100 p-2' type="text" placeholder="Job Title, Keywords, or Company"/>
        </div>
        <div className='flex flex-col mb-4'>
          <label>Location</label>
          <input className='border relative bg-gray-100 p-2' type="text" placeholder="City, State, or Zipcode"/>
        </div>
        <button className='w-full py-3 mt-8 bg-purple-700 hover:bg-purple-800 relative text-white rounded-lg font-semibold'>
          Search
        </button>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Search