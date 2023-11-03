import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"


const LpCont1 = () => {
   
    const [showBtn, setBtn] = useState(true)
    const handleBtn =() => {
        setBtn(false)
    }

   
    return (
        <div className="relative h-auto pt-[2rem] overflow-hidden">
            <div>
                <div className="flex flex-col h-[11rem] bg-[#183A4C] bg-opacity-30 space-y-[1rem]">
                    <div className="text-white font-poppins font-bold text-[2rem] text-left ml-[1rem] mr-[9rem]">Lost & Found</div>
                    <div className="text-white font-poppins font-thin text-[0.7rem] text-left ml-[1rem] mr-[9rem]">Hindi ko pa alam ang ilalagay, gawan ko to after ng terms and agreement and before defense ok?</div>
                </div>
                <img src="https://i.postimg.cc/R0V3WBsF/i-Phone-15-Pro.png" alt="Mockups" className="absolute -top-[1.8rem] -right-[4.5rem] w-[18rem] h-[18rem] z-20"/>
                <img src="https://i.postimg.cc/5twwqLm4/rtu-logo-3-2.png" alt="rtu logo" className="absolute top-[10rem] right-[1.3rem] w-[2.2rem] h-[2.2rem] opacity-50 z-20"/>
                <img src="https://i.postimg.cc/MHxC97Rz/Untitled-design-5-3.png" alt="lF logo" className="absolute top-[0rem] right-[4rem] w-[3rem] h-[3rem] opacity-50 z-10"/>
                <div className="absolute right-[5rem] top-[10rem] bg-[#17394C] w-[6rem] h-[6rem] rounded-full blur-xl"/>
                <div className="absolute right-0 top-4 bg-[#17394C] w-[6rem] h-[6rem] rounded-full blur-xl"/>
            </div>
            {/* get started na button */}
            {showBtn ?(
                <button onClick={handleBtn} className="mt-[2rem] ml-[2rem] bg-[#003985] h-[2rem] w-[8rem] text-[0.9rem] rounded-md text-white font-poppins mb-[1rem]">Get Starded</button>
                ) : (<div className='flex flex-row ml-[1rem] space-x-[1rem]'> 
                        <Signup /> 
                        <Login /> 
                </div>)}
        </div>
    )
}

export default LpCont1