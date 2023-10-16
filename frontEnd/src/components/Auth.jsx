import {Navigate, Outlet } from "react-router-dom";

const Auth = () => {
    
    const role = localStorage.getItem('role')
  
    return(
        role ?
            <Outlet/>
            : <Navigate to='/'/>

    )
}
export default Auth