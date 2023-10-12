import { useEffect, useState } from "react"
import NavBar from '/src/components/NavBar'
import Profile from './components/ProfilePic'
import SearchBar from '/src/components/SearchBar'
import axios from 'axios'
import { Link} from "react-router-dom"
import Logout from "../UserProfile/components/Logout"


const Dashboard = () => {

  // Create an asynchronous function within useEffect
  //eto yung sa data like items eme
  
  const [data, setData] = useState(null)
  const fetchData = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/prot/data`,
      {headers: {
        'Authorization': `Bearer ${localStorage.getItem(`accessToken`)}`
      }, withCredentials: true
      });
      setData([response.data])
    } catch (error) { 
      console.log("Error fetching data", error);
    }
  }

  useEffect(() => {
    // Call the asynchronous function
    fetchData();
  }, []);
  console.log(localStorage.getItem(`accessToken`))

  return (
    
    <div className="bg-[#0d1832]">
        {/*navbar and item contaner */}
      <div className="w-full flex">
        <div className="flex justify-start items-end space-x-3 w-[12rem]">
          <div className=" ml-[1.3rem]">
            <NavBar />
          </div>
        </div>
        <div className="flex justify-start items-end space-x-3 w-[50rem] ml-2">
          <div className="text-white text-lg">Hello, </div>
        </div>
        <div className="flex justify-end space-x-2 w-[12rem]">
          {/*<Profile User={User}/>*/}
        </div>
      </div>
          {/*Item display parent*/}
      <SearchBar />
      <div className="flex flex-col h-screen p-[1rem]">
        
      </div>
      <Logout/>
    </div>
  )
}

export default Dashboard