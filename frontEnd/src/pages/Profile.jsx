

const Profile = () => {
  return (
    <>
        <div className="bg-[#0d1832] h-screen flex flex-col items-center">
            {/* USER IMAGE */}
            <div className="mt-[3.5rem] p-2 rounded-full bg-yellow-400 overflow-hidden">
                <img className="rounded-full" src="https://i.pinimg.com/236x/39/1c/47/391c4702d18e30c1fe92a8ffdeafc45f.jpg?nii=t"></img>
            </div>
            {/* yellow designs */}
            <div className="mt-[4rem] w-full ">
                <div className="bg-yellow-400 w-[14rem] h-[4.6rem]"></div>
            </div>
            <div className="mt-[4rem] w-full flex flex-row-reverse">
                <div className="bg-yellow-400 w-[14rem] h-[4.6rem]"></div>
            </div>

            {/* USER DATA */}
            <div className="bg-[#003985] h-[10rem] w-[15rem] absolute bottom-[15.2rem]">

            </div>

        </div>
    </>
  )
}

export default Profile