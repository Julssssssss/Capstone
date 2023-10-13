import { redirect, Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  
    return(
        role ?
            <Outlet/>
            : <Navigate to='/'/>

    )
}
export default Auth