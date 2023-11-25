import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React, {useState} from 'react'
import bookmark from "../assets/bookmark-plus.svg";

const Jobs = () => {
  const location = useLocation();
  const database = location.state.results;
  const sortOptions = ["Sort by:", "wage", "date posted", "job type", "company", "location"];

  const [sort, setSort] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(999999999);
  const [data, setData] = useState(database);
  
  const handleSort = (e) => {
    setSort(e)
    if (e === "wage") {
      data.sort((a, b) => (a.salary_min - b.salary_min));
    }
    else if (e === "date posted") {
      data.sort((a, b) => (a.created > b.created ? 1 : -1));
    }
    else if (e === "company") {
      data.sort((a, b) => (a.company.display_name > b.company.display_name ? 1 : -1));
    }
    else if (e === "location") {
      data.sort((a, b) => (a.location.area[2] > b.location.area[2] ? 1 : -1));
    }
  }

  const handleFilter = async() => {
    setData(database.filter((value) => {
      return value.salary_min > min && value.salary_max < max
    }));
  }
  
  return (
    <>
      <Navbar />
      <div className='flex flex-col mb-4 justify-between'>
        <label>Sort</label>
        <select className='border relative bg-gray-100 p-2 text-center'
          onChange={(e) => handleSort(e.target.value)}
          defaultValue={sort}
        >
        {sortOptions.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
        </select>
      </div>
      
      <div>
        <div className="flex flex-col">
        <label htmlFor="hs-inline-leading-pricing-select-label" className="text-white block text-sm font-medium mb-2 dark:text-white">Minimum Wage</label>
        <div className="relative">
          <input type="text"
            className="py-3 px-4 pl-9 pr-20 block w-3/12 border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            id="hs-inline-leading-pricing-select-label"
            name="inline-add-on"
            placeholder="0" 
            onChange={(e) => setMin(e.target.value)}/>
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            <span className="text-gray-500">$</span>
          </div>     
        </div>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="hs-inline-leading-pricing-select-label" className="text-white block text-sm font-medium mb-2 dark:text-white">Maximum Wage</label>
          <div className="relative">
            <input type="text"
              className="py-3 px-4 pl-9 pr-20 block w-3/12 border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              placeholder="999999999" 
              onChange={(e) => setMax(e.target.value)}/>
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500">$</span>
            </div>
          </div>
        </div>


        <button className="bg-[#8F00FF] hover:scale-105 hover:bg-[#8F00FF] text-white font-bold py-2 px-4 rounded my-5" onClick={handleFilter}>Filter</button>
      </div>

      

      <div className="space-y-4 flex flex-col justify-center items-center">
      {data.map((data, index) => 
        <div key={index} className="flex flex-col p-4 bg-[#8F00FF] w-1/2 items-center">
          <img className="ml-auto md:ml-50 lg:ml-50" src={bookmark} />
          <h1 className="text-white">Position: {data.title}</h1>
          <h1 className="text-white">Company: {data.company.display_name}</h1> 
          <h1 className="text-white">Occupation: {data.category.label}</h1> 
          <h1 className="text-white">Salary: ${data.salary_min}</h1> 
          <h1 className="text-white">Location: {data.location.area[2]}</h1> 
          <h1 className="text-white">Job Listed: {data.created}</h1> 
          <h1 className="text-white">Job Type: {data.contract_time}</h1> 
        </div>
      )}
      </div>
    </>
  )
}

export default Jobs