import { useEffect, useState} from "react"
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
  }, 500); 

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
          <input type="text" className="bg-[#17394C] text-white p-[1rem] w-[16rem] h-8 rounded-r-lg"
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
        <div key={index} className="flex flex-row m-[1rem] mb-[2.5rem] rounded-lg z-0 justify-end h-[6rem] items-center ">
            {/*title container*/}

          <Link to={{pathname:`/Item/${el._id}`}}
              state={{el}}
            >
            <div className="m-2 rounded-lg bg-[#003985] hover:bg-sky-700 active:bg-[#0d1832] overflow-hidden w-[16rem] h-[5rem]">
              <div className="flex items-center font-bold text-white ml-[7rem] h-full p-4">
                {el.title}
              </div>
            </div>
          </Link>

          <div className="p-2 rounded-full bg-yellow-400 overflow-hidden absolute left-[3rem] ">
            <img src={el.img} alt={el.title} className="rounded-full object-contain w-[7rem]"/>
          </div>
          
        </div>
      )
    })

  }
  
  return (
    
    <div className="bg-[#0d1832] p-[1rem] min-h-screen"> {/* background */}
      {/*objects*/}
        <img className="w-[1rem] h-[6rem] absolute right-0 top-0" src="https://i.postimg.cc/bJdsVcjw/Rectangle-4.png" alt="rectangle"/>
        <img className="w-[1rem] h-[9rem] absolute left-0 top-[5rem]" src="https://i.postimg.cc/bJdsVcjw/Rectangle-4.png" alt="rectangle"/>
        <img className="w-[1rem] h-[9rem] absolute right-0 bottom-7" src="https://i.postimg.cc/bJdsVcjw/Rectangle-4.png" alt="rectangle"/>
        <img className="w-[1rem] h-[9rem] absolute left-0 top-[14rem]" src="https://i.postimg.cc/CxY4cgFg/Rectangle-2.png" alt="rectangle"/>
        <img className="w-[1rem] h-[9rem] absolute right-0 top-[31rem]" src="https://i.postimg.cc/CxY4cgFg/Rectangle-2.png" alt="rectangle"/>
      <div className="bg-[#002855] rounded-[1rem]">
        
          {/*navbar and item contaner */}
        <div className="flex pt-[1rem] px-[1rem]">
          <ProfilePic User={data}/>
          <div className="flex p-[0.5rem] whitespace-nowrap w-full">
            <div className="text-white text-lg"> Hi, {data[0].user.Name}</div>
          </div>
        </div>
        
          {/*Item display parent*/}
          {searchBar()}
        <div className={`flex flex-col p-[1rem] min-h-screen`}> 
          <img className="w-[5rem] h-[5rem] fixed right-[0.5rem] top-[8rem]" src="https://i.postimg.cc/y6yXpNN8/Untitled-design-4.png" alt="rectangle"/>
          <img className="w-[5rem] h-[5rem] fixed left-[0.6rem] bottom-[2rem]" src="https://i.postimg.cc/QNqNF2fz/Untitled-design-8.png" alt="rectangle"/>
          <img className="w-[5rem] h-[5rem] fixed left-[10rem] top-[19rem]" src="https://i.postimg.cc/W1chrGMW/Untitled-design-9.png" alt="rectangle"/>
          {sample()}
          
        </div>
      </div>
    </div>
    
  )
}
export default Dashboard