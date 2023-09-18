import { Link } from "react-router-dom"

const Confirmation = () => {
  return (
    <>
      <div className="bg-[#0d1832] h-auto flex flex-col items-center">
        {/*RTU LOGO */}
        <div className="mt-[4.5rem] h-[10rem] w-[10rem]">
            <img src="https://iieecsc.files.wordpress.com/2021/09/rizal_technological_university-1.png"></img>
        </div>

        {/*DIV FOR CONTAINER OF CONTENTS*/}
        <div className="text-center pt-[1.5rem] p-5 flex flex-col items-center bg-[#17394c] h-[21rem] w-[18rem] mt-[3rem] rounded-lg text-white">
          <h1 className="font-bold text-[2rem]">
            Your request has been sent to the administrators!
          </h1>
          <p className="mt-[2rem]">
            Please check your email for further details and instructions
          </p>
        </div>

        {/*back to landing page*/}
        <Link to='/'> 
          <button className="bg-yellow-500 h-[2rem] w-[10rem] rounded-full mt-[3.7rem] mb-[3rem] text-center p-1">
            DONE
          </button>
        </Link>

      </div>
    </>
  )
}

export default Confirmation