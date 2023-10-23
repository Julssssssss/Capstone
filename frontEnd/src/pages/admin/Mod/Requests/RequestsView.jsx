import SearchBar from '../Home/Widgets/SearchBar'
import RequestList from './components/RequestList'

const RequestsView = () => {
  return (
   <>
    <div className="flex flex-col h-full w-screen bg-[#0D1832] border-l-[0.5rem] border-[#134083] rounded-l-[5rem] space-y-[3rem] pb-[3rem]">
      <div className='flex flex-row justify-between ml-[3rem] mr-[3rem] mt-[2rem] text-white whitespace-nowrap'>
        <div className='text-[2.5rem]'>
          REQUESTS <SearchBar />
        </div>
      </div>
      <RequestList/>
    </div>
   </>
  )
}

export default RequestsView