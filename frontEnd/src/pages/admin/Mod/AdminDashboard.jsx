import SideBar from '../MainComponents/SideBar'
import DashView from "./Home/DashView"
import LostView from "./LostItems/LostView"

const dasboard = () => {
  return (
    <>
    <div className='flex flex-row h-screen w-screen bg-[#17394C] space-x-[1.5rem] overflow-x-hidden overflow-y-hidden'>
        <SideBar />
        <DashView/>
    </div>
    </>
  )
}

export default dasboard