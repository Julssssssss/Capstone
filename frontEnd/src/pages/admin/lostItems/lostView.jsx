import SearchBar from "../home/widgets/searchBar"
import ItemList from './components/itemList'


const lostView = () => {
  return (
    <>
    <div className="flex flex-col h-screen w-screen bg-[#0D1832] border-l-[0.5rem] border-[#134083] rounded-l-[5rem] space-y-[3rem]">
        <div className='flex self-center mt-[2rem]'>
          <div className='flex flex-row w-[73rem] text-white text-[3rem] whitespace-nowrap'>
            LOST ITEMS <SearchBar />
              <div className='flex flex-row-reverse w-[73rem] text-white'>
               {/*incase lang na may ilagay dyan*/}
              </div>
          </div>
        </div>
        <ItemList />
      </div>
    </>
  )
}

export default lostView