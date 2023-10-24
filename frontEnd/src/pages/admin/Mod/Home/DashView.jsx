import Panels from './Widgets/Panels'
import SearchBar from './Widgets/SearchBar'
import ProfileIcon from './Widgets/ProfileIcon'
import Sidebar from '../../MainComponents/SideBar'

const dashView = () => {
  return (
    <>
    <div className='flex flex-row h-screen w-screen bg-[#17394C] space-x-[1.5rem] overflow-x-hidden overflow-y-hidden'>
      <Sidebar />
      <div className="flex flex-col self-center h-full w-screen bg-[#0D1832] border-l-[0.5rem] border-[#134083] rounded-l-[5rem] space-y-[2rem]">
        <div className='flex flex-row justify-between ml-[3rem] mr-[3rem] mt-[2rem] text-white whitespace-nowrap'>
          <div className='text-[2.5rem]'>
            DASHBOARD <SearchBar />
          </div>
          <ProfileIcon />
        </div>
          <Panels />
      </div>
    </div>
    </>
  )
}

export default dashView