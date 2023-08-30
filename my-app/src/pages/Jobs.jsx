import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React, {useState} from 'react'


//Different methods to sort wage? database[index].salary_min 

const Jobs = () => {
  const location = useLocation()
  const database = location.state.results;
  console.log(database);

  const filterOptions = ["wage", "relevance"];

  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e)
    if (filter == "wage") {
 
    }
    else if (filter == "relevance") {

    }
  }

  // console.log(database)

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
          <h1 className="text-white">{database.title}</h1>
          <h1 className="text-white">{database.company.display_name}</h1> 
          <h1 className="text-white">{database.category.label}</h1> 
          <h1 className="text-white">${database.salary_min}</h1> 
          <h1 className="text-white">{database.location.area[1]}</h1> 
        </div>
      )}
      </div>
    </>
  )
}

export default Jobs