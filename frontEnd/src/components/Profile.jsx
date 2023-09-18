import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Profile = () => {
  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <>
      {/* Parent profile */}
      {profile ? <div className="h-screen w-screen fixed z-10" onClick={toggleProfile} ></div> : null}
      <div>
        <div className={`cursor-pointer mt-4 mr-3 rounded-full bg-white h-10 w-10 z-20 ${profile ? 'bg-opacity-20' : ''}`} onClick={toggleProfile}>
        </div>
        {profile && (
        
          <div className="absolute p-2 right-6 flex flex-col rounded-xl items-center text-white bg-[#17394C] mt-3 w-40 h-auto z-10">
                <Link to='/Profile'>
                  <button className="bg-[#134083] w-[9rem] rounded-full p-2 mb-3">
                    Profile
                  </button>
                </Link>
                <Link to='/'>
                  <button className="bg-[#134083] w-[9rem] rounded-full p-2">
                    Logout
                  </button>
                </Link>
          </div>
          
        )}
      </div>
    </>
  );
}

export default Profile;