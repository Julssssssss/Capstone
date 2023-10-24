import { useEffect, useState, useContext } from "react"
import NavBar from './components/NavBar'
import { Link} from "react-router-dom"
import ProfilePic from "./components/ProfilePic"
import debounce from "debounce"
import { getUserAndItem } from "./components/getUserAndItemData"


const Dashboard = () => {

  // Create an asynchronous function within useEffect
  //eto yung sa data like items eme
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(null)
 

  const getData = async()=>{
    const temp = await getUserAndItem()
    setData([temp]);
    setLoading(false)
    setFilteredData(temp.items)
  }

  useEffect(()=>{
    getData()
  },[])
  
  //lagay dito loading eme
  if (loading) {
    return <div>Loading...</div>;
  }


  const debouncedFilter = debounce(() => {
    if(searchQuery.length > 1){
      const filtered = data[0].items.filter((el) => {
        return el.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setFilteredData(filtered) // Set filtered data in state
    }
    else{
      setFilteredData(data[0].items)
    }
  }, 1000); 

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedFilter(); 
  }

  function searchBar() {
    return (
      <>
      <div className="flex flex-row justify-center mt-[1rem]">
          <div className="w-[2rem] h-[2rem] p-2 bg-[#17394C] rounded-l-lg">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
          <input type="text" className="bg-[#17394C] text-white p-[1rem] w-72 h-8 rounded-r-lg"
          value={searchQuery}
          onChange={handleInputChange}/>  
      </div>
      </>
    )
  }

  function sample() {

    return filteredData.map((el, index)=>{
      return (
        // container for item and description
        <div key={index} className="flex flex-row m-3 rounded-lg mb-[3rem] z-0 justify-end h-[9rem] items-center ">
            {/*title container*/}

          <Link to={{pathname:`/Item/${el._id}`}}
              state={{el}}
            >
            <div className="m-2 rounded-lg bg-[#003985] hover:bg-sky-700 active:bg-[#0d1832] overflow-hidden w-[15rem] h-[5rem]">
              <div className="flex items-center font-bold text-white ml-[5rem] h-full p-3">
                {el.title}
              </div>
            </div>
          </Link>

          <div className="p-2 m-3 rounded-full bg-yellow-400 overflow-hidden absolute left-[1rem] ">
            <img src={el.img} alt={el.title} className="rounded-full object-contain w-[7rem]"/>
          </div>
          
        </div>
      )
    })

  }
  
  return (
    
    <div className="bg-[#0d1832] h-full">
        {/*navbar and item contaner */}
      <div className="w-full h-full flex">
        {/* for navigation bar  */}
        <div className="flex justify-start items-end space-x-3 w-[4rem]">
          <div className="">
            {/* for navigation bar  */}
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
        {searchBar()}
      <div className="flex flex-col bg-[#0d1832] h-screen p-[1rem]">
        {sample()}
      </div>
    </div>
  )
}
export default Dashboard