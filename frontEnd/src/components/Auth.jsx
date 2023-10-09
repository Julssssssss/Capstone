import { redirect, Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const accessToken = localStorage.getItem('accessToken')

    return(
        accessToken ?
            <Outlet/>
            : <Navigate to='/'/>

    )
}
export default Auth