import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React, {useState} from 'react'
import bookmark from "../assets/bookmark-plus.svg";


//Different methods to sort wage? database[index].salary_min 

const Jobs = () => {
  const location = useLocation();
  // console.log(location)
  const database = location.state.results;
  console.log(database);

  const filterOptions = ["", "wage", "date posted", "job type", "company", "location"];

  const [filter, setFilter] = useState("");
  //job type, date posted, salary, location (reverse geocoding - google api), company (display_name) 
  const handleFilter = (e) => {
    setFilter(e)
    if (e == "wage") {
      database.sort((a, b) => (a.salary_min - b.salary_min));
    }
    else if (e == "date posted") {
      database.sort((a, b) => (a.created > b.created ? 1 : -1));
    }
    // else if (e == "job type") {
    //   database.sort((a, b) => (b.contract_time > a.contract_time ? 1 : -1));
    // }
    else if (e == "company") {
      database.sort((a, b) => (a.company.display_name > b.company.display_name ? 1 : -1));
    }
    else if (e == "location") {
      database.sort((a, b) => (a.location.area[2] > b.location.area[2] ? 1 : -1));
    }
  }

  return (
    <>
      <Navbar />

      <div className='flex flex-col mb-4'>
        <label>Filter</label>
        <select className='border relative bg-gray-100 p-2 text-center'
          onChange={(e) => handleFilter(e.target.value)}
          defaultValue={filter}
        >
        {filterOptions.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
        </select>
      </div>

      <div className="space-y-4 flex flex-col justify-center items-center">
      {database.map((database, index) => 
        <div key={index} className="flex flex-col p-4 bg-[#8F00FF] w-1/2 items-center">
          {/* <h1 className="text-white">{index}</h1> */}
          <img className="ml-auto md:ml-50 lg:ml-50" src={bookmark} />
          <h1 className="text-white">Position: {database.title}</h1>
          <h1 className="text-white">Company: {database.company.display_name}</h1> 
          <h1 className="text-white">Occupation: {database.category.label}</h1> 
          <h1 className="text-white">Salary: ${database.salary_min}</h1> 
          <h1 className="text-white">Location: {database.location.area[2]}</h1> 
          <h1 className="text-white">Job Listed: {database.created}</h1> 
          <h1 className="text-white">Job Type: {database.contract_time}</h1> 
        </div>
      )}
      </div>
    </>
  )
}

export default Jobs