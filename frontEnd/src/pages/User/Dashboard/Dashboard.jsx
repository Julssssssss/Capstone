import { useEffect, useState, useContext } from "react"
import NavBar from './components/NavBar'
import { Link} from "react-router-dom"
import ProfilePic from "./components/ProfilePic"
import SearchBar from "./components/SearchBar"
import { getUserAndItem } from "./components/getUserAndItemData"


const Dashboard = () => {

  // Create an asynchronous function within useEffect
  //eto yung sa data like items eme
  
  //lagay sa USECONTEXT para mapasa sa ibang may kaylangan na pages
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);

  const getData = async()=>{
    const temp = await getUserAndItem()
    setData([temp]);
    setLoading(false)
  }

  useEffect(()=>{
    getData()
  },[])
  
  //lagay dito loading eme
  if (loading) {
    return <div>Loading...</div>;
  }

  function sample() {
    return data.map((elem) => 
      Object.values(elem.items).map((el, index)=>{
        return (
          // container for item and description
          <div key={index} className="flex flex-row m-3 rounded-lg mb-[1rem] z-0 justify-end h-[8.5rem] items-center ">
              {/*title container*/}

            <Link className="shadow-sm shadow-black rounded-lg bg-[#003985] hover:bg-sky-700 active:bg-[#0d1832] overflow-hidden w-[15rem] h-[5rem]" to={{pathname:`/Item/${el._id}`}}
                state={{el}}
              >
                <div className="flex items-center font-bold text-white ml-[5rem] h-full p-3">
                  {el.title}
                </div>
            </Link>

            <div className="p-2 m-3 rounded-full bg-yellow-400 overflow-hidden absolute left-[1rem] ">
              <img src={el.img} alt={el.title} className="rounded-full object-contain w-[7rem]"/>
            </div>
            
          </div>
        )
      })
    );
  }
  
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
          <div className="text-white text-lg"> Hello, {data[0].user.Name}</div>
        </div>
        <div className="flex justify-end space-x-2 w-[12rem]">
          <ProfilePic User={data}/>
        </div>
      </div>
          {/*Item display parent*/}
      <SearchBar />
      <div className="flex flex-col h-screen p-[1rem]">
        {sample()}
      </div>
    </div>
  )
}
export default Dashboard