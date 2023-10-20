
const Signup = () => {
    const googleAuth =()=>{
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self"
        )
    }
    //need maglagay ng parang security question
  return (
    <>
        <button onClick={googleAuth} className="mt-[1.7rem] bg-[#003985] h-[3rem] w-[9rem] p-1 rounded-xl text-white mx-1">Sign up</button>
    </>
  )
}

export default Signup