import React from 'react'

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>;
    </div>
  )
}

export default LoginPage