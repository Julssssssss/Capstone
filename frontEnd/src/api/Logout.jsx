
const Logout = () => {
    const logout =()=>{
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/logout`, "_self"
        )
    }
  return (
    <div>
      <button className="bg-[#134083] w-[9rem] rounded-full p-2 mb-3" onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout