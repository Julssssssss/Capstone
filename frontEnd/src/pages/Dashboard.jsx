import { useEffect, useState } from "react"
import NavBar from '/src/components/NavBar'
import Profile from '/src/components/Profile'
import SearchBar from '/src/components/SearchBar'
import axios from 'axios'
import { Link} from "react-router-dom"

//note to self
//tumigil ka sa pag console log ng data
const Dashboard = () => {
  //taga salo lang ng data galing backend
  const [data, setData] = useState(null);

  // Create an asynchronous function within useEffect
  //eto yung sa data like items eme
  const fetchData = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login/success`, {withCredentials: true});
      //setUser([response.data.user])
      setData(response.data)
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  useEffect(() => {
    // Call the asynchronous function
    fetchData();
    //lagay ka sana dito ng if wala laman user and items go to '/'
  }, []); // Empty dependency array means this effect will run once on mount

  console.log(data.items)
}

export default Dashboard