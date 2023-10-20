import SideBar from '../admin/components/sidebar'
import Home from '../admin/home/dashView'
import LostItems from '../admin/lostItems/lostView'

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