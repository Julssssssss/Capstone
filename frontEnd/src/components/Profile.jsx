import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";



const Profile = ({User}) => {
  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <>
      {/* Parent profile */}
      
      <Link to='/Profile'>
        <div style={{backgroundImage:`url(${User[0].user.picture})`}} className={`bg-contain cursor-pointer mt-4 mr-3 rounded-full bg-center h-10 w-10 z-20 ${profile ? 'bg-opacity-20' : ''}`} onClick={toggleProfile}></div>
      </Link>
        
          
       
    </>
  );
}

export default Profile;