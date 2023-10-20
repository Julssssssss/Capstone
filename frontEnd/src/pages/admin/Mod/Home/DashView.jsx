import Panels from './Widgets/Panels'
import LostItems from './Widgets/LostItems'
import SearchBar from './Widgets/SearchBar'
import ProfileIcon from './Widgets/ProfileIcon'

const dashView = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-[#0D1832] border-l-[0.5rem] border-[#134083] rounded-l-[5rem] space-y-[3rem]">
        <div className='flex self-center mt-[2rem]'>
          <div className='flex flex-row w-[73rem] text-white text-[3rem]'>
            DASHBOARD <SearchBar />
              <div className='flex flex-row-reverse w-[73rem] text-white'>
                <ProfileIcon />
              </div>
          </div>
        
        </div>
        <Panels />
        <LostItems />
      </div>
    </>
  )
}

export default dashView