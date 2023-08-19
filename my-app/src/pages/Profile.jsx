import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from Profile: ', token);

    fetch('http://localhost:27017/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.message);
        // console.log("From data: ", data.message);
        // console.log("From user: ", user);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        alert("Login Required")
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-white">Profile</h1>
      <h2 className="text-white">Email: {user.username}</h2>
      <h3 className="text-white">ID: {user._id}</h3>
    </div>
  );
}

export default Profile;
