import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <>
      {/* Parent profile */}
      <div className='p-5 relative'>
        <div className={`cursor-pointer rounded-full bg-white h-10 w-10 z-10 ${profile ? 'bg-opacity-20' : ''}`} onClick={toggleProfile}>
        </div>
        {profile && (
        
          <div className="absolute p-2 right-6 flex flex-col rounded-xl justify-items-center text-white bg-[#17394C] mt-3 w-40 h-auto">
            <button className="bg-[#134083] rounded-full p-2 mb-3">
                  Profile
                </button>
                <button className="bg-[#134083] rounded-full p-2">
                  Logout
                </button>
          </div>
          
        )}
      </div>
    </>
  );
}

export default Profile;
