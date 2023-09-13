import { useEffect, useState } from "react"
import NavBar from '/src/components/NavBar'
import Profile from '/src/components/Profile'
import SearchBar from '/src/components/SearchBar'
import axios from 'axios'

const Dashboard = () => {
  //taga salo lang ng data galing backend
  const [data, setData] = useState([]);

  useEffect(() => {
  // Create an asynchronous function within useEffect
  async function fetchData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/db`);
      setData([response.data]);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  // Call the asynchronous function
  fetchData();
}, []); // Empty dependency array means this effect will run once on mount

  function sample() {
  
    return data.map((elem) => 
      Object.values(elem).map((el, index)=>{
        return (
          // container for item and description
          <div key={index} className="flex flex-row m-3 rounded-lg mb-[1rem] z-0 justify-end h-[9rem] items-center">
              {/*title container*/}
            <div className="m-2 rounded-lg bg-[#003985] overflow-hidden w-[15rem] h-[5rem]">
              <div className="flex items-center font-bold text-white ml-[5rem] h-full p-3">
                {el.title}
              </div>
            </div>

            <div className="p-2 m-3 rounded-full bg-yellow-400 overflow-hidden absolute left-[1rem]">
              <img src={el.img} alt={el.title} className="rounded-full object-contain w-[7rem]">
              </img>
            </div>

              {/*name item
              <div>{el.title}</div>*/}

              {/*for item status 
              <button className={`rounded-full h-2 w-2 absolute bottom-2 right-2 ${el.availability===("yes") ? 'bg-green-500':'bg-red-500'}`}></button>
              */}
            
          </div>
        )
      })
    );
  }

  return (
    
    <div className="bg-[#0d1832]">
        {/*navbar and item contaner */}
      <div className="w-full flex justify-between">
        <div className="flex justify-start space-x-2 w-[50rem]">
          <div className="mt-6 ml-5">
            <NavBar />
          </div>
          <div className="text-white text-lg mt-5">Hello, Julsssss</div>
        </div>
        <div className="flex justify-end space-x-2 w-[50rem]">
          <Profile />
        </div>
      </div>
          {/*Item display parent*/}
      <SearchBar />
      <div className="flex flex-col h-full p-[1rem]">
        {sample()}
      </div>
    </div>
  )
}

export default Dashboard