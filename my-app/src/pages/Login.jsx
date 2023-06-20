import React, { useState } from "react";
import background from "../assets/login3.jpg";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const notify = () => {
    toast.success('Login Successful!');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email: ', email);
    console.log('password: ', password);

    const requestBody = {
      "username": email,
      "password": password
    };

    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      })
      .then(response => {
        // console.log(response);
        // console.log(requestBody);
        return response.json();
      })
      .then(data => {
        console.log(data);

        if(data.success) {
          notify();
          routeChange();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="h-screen w-full object-cover" src={background} alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-purple-700 p-8 px-8 rounded-lg">
            <h2 className="text-white text-4xl font-bold text-center">
              Sign In
            </h2>
            <div className="text-white flex flex-col text-gray-400 py-2 font-semibold">
              <label>Email address</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
                type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-white flex flex-col text-gray-400 py-2 font-semibold">
              <label>Password</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-white flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="text-white w-full my-5 py-2 bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg" onClick={handleSubmit}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
