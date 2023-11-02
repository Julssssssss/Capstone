import { useState } from "react"
import TermsAndAgreement from "./TermsAndAgreement"

const Signup = () => {

  const [showTAC, setShowTAC] = useState(false)

    //onClick={()=>{setShowTAC(false)}}
    //need maglagay ng parang security question
  return (
    <>
      <button onClick={()=>{setShowTAC(!showTAC)}} className="mt-[1.7rem] bg-[#003985] h-[3rem] w-[9rem] p-1 rounded-xl text-white mx-1">Sign up</button>
        {showTAC ? 
          <div>
            <div></div>
            <TermsAndAgreement/>
          </div>
          : null}
    </>
  )
}

export default Signup