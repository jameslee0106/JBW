import React, {useState} from 'react'
import { Navbar } from '../components/Navbar'
import regImg from '../assets/login2.jpg'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email', email);
    console.log('password', password);

    const requestBody = {
      "username": email,
      "password": password
    };

    fetch('http://localhost:27017/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

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
          <input className='border relative bg-gray-100 p-2' type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col mb-4'>
          <label>Create Password</label>
          <input className='border relative bg-gray-100 p-2' type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='w-full py-3 mt-8 bg-purple-700 hover:bg-purple-800 relative text-white rounded-lg font-semibold' onClick={handleSubmit}>
          Create Account
        </button>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Register