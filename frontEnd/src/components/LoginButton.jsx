import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn rounded-full" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
}

export default LoginButton;
