import SideBar from '../MainComponents/SideBar'
import LostItems from '../Mod/LostItems/LostView'

const dasboard = () => {
  return (
    <>
    <div className='flex flex-row h-screen w-screen bg-[#17394C] space-x-[1.5rem] overflow-x-hidden overflow-y-hidden'>
        <SideBar />
        <LostItems />
    </div>
    </>
  )
}

export default dasboard