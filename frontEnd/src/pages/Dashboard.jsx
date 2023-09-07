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
          <div key={index}>
            <h1>{el.img}</h1>
          </div>
        )
      })
    );
  }

  return (
    <div>
      {sample()}
    </div>
  )
}

export default Dashboard