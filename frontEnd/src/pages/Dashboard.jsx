import { useEffect, useState } from "react"
import axios from 'axios'

const Dashboard = () => {

    //taga salo lang ng data galing backend
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from the server when the component mounts
      axios.get("http://localhost:3000/db")//saan kukunin yung data
        .then((res) => setData(res.data))
        .catch((error) => console.log("Error fetching data", error));
    }, []);
    
    console.log(`here`, Object.values(data))
  return (
    <div>
        
    </div>
  )
}

export default Dashboard