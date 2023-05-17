import React from 'react';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import User from './pages/User';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Home />}  />
          <Route path ="/careers" element ={<Jobs />} />
          <Route path ="/login" element ={<Login />} />
          <Route path ="/signup" element ={<Register />} />
          <Route path ="/search" element ={<Search />} />
          <Route path ="/user" element ={<User />} />
          <Route path ="/about" element ={<About />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
