import React, { useState, useEffect } from "react";
import { Navbar } from '../components/Navbar'
import { adzunaService } from "../service/adzunaService";
import { Link, useNavigate } from "react-router-dom";

// import { loading } from "../service/Loading"

// useEffect to call hello
// use a button to call hello

const Search = () => {
  const locationOptions = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  const occupationOptions = [
    "accounting-finance-jobs",
    "it-jobs",
    "sales-jobs",
    "customer-services-jobs",
    "engineering-jobs",
    "hr-jobs",
    "healthcare-nursing-jobs",
    "hospitality-catering-jobs",
    "pr-advertising-marketing-jobs",
    "logistics-warehouse-jobs",
    "teaching-jobs",
    "trade-construction-jobs",
    "admin-jobs",
    "legal-jobs",
    "creative-design-jobs",
    "graduate-jobs",
    "retail-jobs",
    "consultancy-jobs",
    "manufacturing-jobs",
    "scientific-qa-jobs",
    "social-work-jobs",
    "travel-jobs",
    "energy-oil-gas-jobs",
    "property-jobs",
    "charity-voluntary-jobs",
    "domestic-help-cleaning-jobs",
    "maintenance-jobs",
    "part-time-jobs",
    "other-general-jobs",
    "unknown"
  ];
  const [loading, setLoading] = useState(false); 
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");
  
  
  // This is a state
  const navigate = useNavigate();

  const handleSearchClick = async () => {
    setLoading(true);
    try {
      let data = await adzunaService.fetchJobs(occupation, location);
      navigate("/jobs", {state: data});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false); // Re-render twice
  };

  // const transferData = () => {
  //   handleSearchClick();
  //   // console.log(database);
  //   navigate("/jobs", {state: database});
  // }

  // console.log(database)
  // put it here
  // if (database.length != 0) {
  // console.log(database.results);
  // }

  // console.log(occupation);
  // console.log(location);

  return (
    <div>
    <Navbar />
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <div className='flex justify-center items-center h-full'>
      <div className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg'>
        <h2 className='text-4xl font-bold text-center py-8'>Search</h2>
        <div className='flex flex-col mb-4'>
          <label>Occupation</label>
          <select
            className='border relative bg-gray-100 p-2'
            onChange={(e) => setOccupation(e.target.value)}
            value={occupation}
          >
          <option value="" disabled>Select the Occupation</option>
          {occupationOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
          </select>

        </div>
        <div className='flex flex-col mb-4'>
          <label>Location</label>
          <select 
            className='border relative bg-gray-100 p-2'
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
          <option value="" disabled>Select the Location</option>
          {locationOptions.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
          </select>
        </div>
        {/* <Link to={{pathname:"/jobs", state:{fetchedData: database}}}> */}
        <button onClick={handleSearchClick} className='w-full py-3 mt-8 bg-purple-700 hover:bg-purple-800 relative text-white rounded-lg font-semibold'>
          {/* Search */}
          {loading ? (
            <div role="status" className="flex justify-center items-center">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            ): ("Fetch Data") }
        </button>
        {/* </Link> */}
      </div>
    </div>
    </div>
  </div>
  )
}

export default Search