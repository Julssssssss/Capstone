

const Login = () => {
    const googleAuth =()=>{
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/google`, "_self"
        )
    }
  return (
    <div>
        <button onClick={googleAuth} className="mt-[1.7rem] bg-[#003985] h-[3rem] w-[9rem] p-1 rounded-xl text-white mx-1">Log in</button>
    </div>
  )
}

export default Login