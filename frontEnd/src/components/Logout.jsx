import React from 'react'

const Logout = () => {
    const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </button>
  )
}

export default Logout