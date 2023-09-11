
const Logout = (userDetails) => {
    const user = userDetails.user
    const logout =()=>{
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/logout`, "_self"
        )
    }
  return (
    <div>
        <button onClick={logout}></button>
    </div>
  )
}

export default Logout