import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"


const LpCont1 = () => {
    let r= false
    const img = `https://picsum.photos/200`
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
   
    const [showBtn, setBtn] = useState(true)
    const handleBtn =() => {
        setBtn(false)
    }

    function content1(){
        return(
            <>
                {/* content na dko din alam itatawag */}
                <div className={`flex w-screen h-[10rem] justify-between ${r? 'flex-row-reverse mt-[3.5rem]': 'mt-[3rem]'}`}>
                    <div className="bg-[#134083] w-[5rem]"></div>
                        
                    <div className="text-center rounded-lg p-2 w-[12rem] bg-[#17394c] shadow-md shadow-yellow-400 text-white sm:text-black">
                        {lorem}
                    </div>

                </div>
                {/* phone i guess? */}
                
                <img className={`w-[6.5rem] h-[12rem] shadow-sm rounded-md ${r? '-mt-[11rem] ml-[11rem]': '-mt-[11rem] mr-[11rem]'}`} src={img}></img>
                {r=true}
                
            </>
        )
    }               
 
    return (
        <>
            <div className="h-auto flex flex-col items-center bg-[#0d1832]">
                {/* dko alam ano itatawag dito basta eto nasa unahan */}
                
                <div className="flex flex-row rounded-2xl shadow-3xl shadow-[#003985] w-[20rem] h-[11.6rem] mt-[3rem]">
                    {/* img */}
                    <img className="h-full w-[55%] rounded-l-2xl" src={img}></img>

                    {/* txt cont */}
                    <div className="flex flex-col justify-center text-white text-center w-[40%] p-2">
                        {/* h1 txt */}
                        <h1 className="font-bold">
                            LANDING PAGE CONTENTS
                        </h1>

                        {/* p txt */}
                        <p className="mt-[1rem]">
                            Lorem ipsum dolor sit amet
                        </p>

                    </div>
                </div>
                
                {/* get started na button */}
                {showBtn ?(
                <button onClick={handleBtn} className="mt-[1.7rem] bg-[#003985] h-[3rem] w-[11rem] p-2 rounded-xl text-white">GET STARTED</button>
                ) : (<div className='flex flex-row'> 
                        <Signup /> 
                        <Login /> 
                </div>)}
                {/* dko din alam tatawag dito basta first content */}
                {content1()}
                {content1()}

                
            </div>
        </>
    )
}

export default LpCont1