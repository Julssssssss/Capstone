import SideBar from '../MainComponents/SideBar'
import DashView from "./Home/DashView"
import LostView from "./LostItems/LostView"
import RequestsView from './Requests/RequestsView'

const dasboard = () => {
  return (
    <>
    <div className='flex flex-row h-screen w-screen bg-[#17394C] space-x-[1.5rem] overflow-x-hidden overflow-y-hidden'>
        <SideBar />
        <LostView/>
    </div>
    </>
  )
}

export default dasboard