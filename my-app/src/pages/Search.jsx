import React, { useState, useEffect } from "react";
import { Navbar } from '../components/Navbar'

// useEffect to call hello
// use a button to call hello

const Search = () => {
  const [database, setDatabase] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = () => {

    fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f8df06cf&app_key=790c22f1845e68f55ef259db12a0a173`, {
        headers: {
          'Accept': 'application/json',
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // setDatabase(data);
      })
      .catch(error => {
        console.error('Error database:', error);
      });
  };

  // console.log(database);

  return (
    <div>
    <Navbar />
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <div className='flex justify-center items-center h-full'>
      <div className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg'>
        <h2 className='text-4xl font-bold text-center py-8'>Search</h2>
        <div className='flex flex-col mb-4'>
          <label>Occupation</label>
          <input className='border relative bg-gray-100 p-2' type="text" placeholder="Job Title, Keywords, or Company"/>
        </div>
        <div className='flex flex-col mb-4'>
          <label>Location</label>
          <input className='border relative bg-gray-100 p-2' type="text" placeholder="City, State, or Zipcode"/>
        </div>
        <button onClick={fetchData} className='w-full py-3 mt-8 bg-purple-700 hover:bg-purple-800 relative text-white rounded-lg font-semibold'>
          Search
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Search