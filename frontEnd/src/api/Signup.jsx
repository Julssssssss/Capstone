
const Signup = () => {
    const googleAuth =()=>{
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self"
        )
    }
  return (
    <div>
        <button onClick={googleAuth}></button>
    </div>
  )
}

export default Signup