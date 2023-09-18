
const Profile = () => {
  return (
    <>
        <div className="bg-[#0d1832] h-screen flex flex-col items-center">
            {/* USER IMAGE */}
            <img className='rounded-full border-8 mt-10 w-[10rem] h-[10rem] border-yellow-400' src="https://i.pinimg.com/236x/39/1c/47/391c4702d18e30c1fe92a8ffdeafc45f.jpg?nii=t"></img>
            {/* USER DATA */}
            <div className="bg-[#003985] h-[10rem] w-[15rem] mt-[3.2rem] text-white p-5 z-20">
                hello
            </div>
            {/* yellow designs */}
            <div className="absolute left-0 top-[15rem] bg-yellow-400 w-[14rem] h-[4.6rem] z-10"></div>
            <div className=" absolute right-0 top-[22rem] bg-yellow-400 w-[14rem] h-[4.6rem] z-10"></div>
        </div>
    </>
  )
}

export default Profile