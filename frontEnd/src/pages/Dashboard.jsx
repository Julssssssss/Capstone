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
  const [data, setData] = useState([null]);

  // Create an asynchronous function within useEffect
  //eto yung sa data like items eme
  const fetchData = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login/success`, {withCredentials: true});
      //setUser([response.data.user])
      setData([{'items': response.data.items, 'user':response.data.user}])
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  useEffect(() => {
    // Call the asynchronous function
    fetchData();
    //lagay ka sana dito ng if wala laman user and items go to '/'
  }, []); // Empty dependency array means this effect will run once on mount

function sample() {
  return data.map((elem) =>
    Object.values(elem.items).map((el, index)=>{
      console.log(el)
      return (
        // container for item and description
        <div key={index} className="flex flex-row m-3 rounded-lg mb-[1rem] z-0 justify-end h-[9rem] items-center">
            {/*title container*/}
          <Link to={`/Item/${el._id}`}>
            <div className="m-2 rounded-lg bg-[#003985] hover:bg-sky-700 active:bg-[#0d1832] overflow-hidden w-[15rem] h-[5rem]">
              <div className="flex items-center font-bold text-white ml-[5rem] h-full p-3">
                {el.title}
              </div>
            </div>
          </Link>

          <div className="p-2 m-3 rounded-full bg-yellow-400 overflow-hidden absolute left-[1rem]">
            <img src={el.img} alt={el.title} className="rounded-full object-contain w-[7rem]"/>
          </div>
          
        </div>
      )
    })
  );
}

return sample()

}

export default Dashboard