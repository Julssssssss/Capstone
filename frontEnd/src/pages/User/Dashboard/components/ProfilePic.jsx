import React, { useState } from "react";
import { Link } from "react-router-dom";


const Profile = ({User}) => {
  return (
    <>
      {/* Parent profile */}
      
      <Link to={{pathname:`/Profile`}}
        state={{User}}
      >
        <div style={{backgroundImage:`url(${User[0].picture})`}} className={`bg-contain cursor-pointer mt-4 mr-3 rounded-full bg-center h-10 w-10 z-20 border-2 border-[#F9D62B]`}></div>
      </Link>
        
          
       
    </>
  );
}

export default Profile;