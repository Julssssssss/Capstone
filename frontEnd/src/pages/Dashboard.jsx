import { useEffect, useState } from "react"
import axios from 'axios'

const Dashboard = () => {

  //taga salo lang ng data galing backend
  const [data, setData] = useState([]);

  useEffect(() => {
  // Create an asynchronous function within useEffect
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/db");
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
          <div key={index} className="flex flex-row mb-[1rem]">
            <div>
              <img src={el.img} alt={el.title}>
              </img>
            </div>
            
            <div className="flex flex-col w-full items-center relative">
              <div>{el.title}</div>
              <div className="w-full h-full p-2">{el.desc}</div>
              
              <button className={`rounded-full h-2 w-2 absolute bottom-1 right-1 ${el.availability===("yes") ? 'bg-green-500':'bg-red-500'}`}></button>
            </div>
          </div>
        )
      })
    );
  }

  return (
    <div>
      {/*wag kalimutan delete to after kasi pang debug lang tong style nato*/}
      <style>
        {`
          *{outline: solid red}
        `}
      </style>

      <div className="bg-[#0d1832] text-white">
        <div className="flex flex-row">
          <h1>
            NAVBAR
          </h1>
        </div>

        <div className="flex flex-col h-full p-[1rem]">
          {sample()}
        </div>
      </div>
    </div>
  )
}

export default Dashboard