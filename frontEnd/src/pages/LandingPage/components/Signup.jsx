import { useState } from "react";
import TermsAndAgreement from "./TermsAndAgreement";

const Signup = () => {
  const [showTAC, setShowTAC] = useState(false);
  
  const closeTAC = () => {
    setShowTAC(false);
  };

  return (
    <>
      <button onClick={() => setShowTAC(!showTAC)} className="mt-[2rem] mb-[1rem] bg-[#003985] h-[2rem] w-[8rem] p-1 rounded-md text-white text-poppins text-[0.9rem] mx-1">Sign up</button>
      {showTAC ? (
        <div>
          <div onClick={() => setShowTAC(false)} className="fixed inset-0 z-30"></div>
          <div className="modal-content">
            <TermsAndAgreement closeTAC={closeTAC}/>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Signup;
