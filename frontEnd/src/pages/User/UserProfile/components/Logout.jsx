
const Logout = () => {
  const logout =()=>{
      window.open(
          `${import.meta.env.VITE_API_URL}/auth/logout`, "_self"
      )
      localStorage.clear()
  }

return (
  <div>
    <button className="bg-[#134083] w-[9rem] rounded-full p-2 text-white" onClick={logout}>Logout</button>
  </div>
)
}

export default Logout