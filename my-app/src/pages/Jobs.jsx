import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React from 'react'

const Jobs = () => {
  const location = useLocation()
  console.log(location.state.results);
  const database = location.state.results;
  return (
    <>
      <Navbar />
      <div className="space-y-4 flex flex-col justify-center items-center">
      {database.map(database => 
        <div className="flex flex-col p-4 bg-[#8F00FF] w-1/2 items-center">
          <h1 className="text-white">{database.title}</h1>
          <h1 className="text-white">{database.company.display_name}</h1> 
          <h1 className="text-white">{database.category.label}</h1> 
          <h1 className="text-white">{database.salary_min}</h1> 
        </div>
      )}
      </div>
    </>
  )
}

export default Jobs