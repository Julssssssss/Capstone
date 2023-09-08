import { useEffect, useState } from "react"
import NavBar from '/src/components/NavBar'
import Profile from '/src/components/Profile'
import axios from 'axios'

const Dashboard = () => {

  //taga salo lang ng data galing backend
  const [data, setData] = useState([]);

  useEffect(() => {
  // Create an asynchronous function within useEffect
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/db");
      setData([...data, response.data]);
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
          <div key={index} className="flex flex-row m-3 rounded-lg bg-[#134083] mb-[1rem] z-0">
            <div className="p-3 bg-[#17394C] m-2 rounded-xl">
              <img src={el.img} alt={el.title} className="rounded-xl">
              </img>
            </div>
          {/*Parent container for desription */}
            <div className="flex flex-col w-full items-center relative">
              {/*name item*/}
              <div>{el.title}</div>
          {/*item description */}
              <div className="w-full h-full p-2">{el.desc}</div>
          {/*for item status */}
              <button className={`rounded-full h-2 w-2 absolute bottom-2 right-2 ${el.availability===("yes") ? 'bg-green-500':'bg-red-500'}`}></button>
            </div>
          </div>
        )
      })
    );
  }

  return (
    <>
    <div>
         <style>
        {`
          *{outline: solid red}
        `}
      </style>
      

{/*navbar and item contaner */}

      <div className="bg-[#0d1832]  text-white">
        
        <div className="hi flex flex-row w-auto">
            <div className="flex flex-row">
                <NavBar />
                <div className="mt-0 pt-6 text-xl">hello, juls</div>
            </div>
          
          <div className="hello flex flex-row-reverse">
              <Profile />
              <h1>hello</h1>
          </div>
        </div>
         
        

{/*Item display parent*/}
        <div className="flex flex-col h-full p-[1rem]">
          {sample()}
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Dashboard