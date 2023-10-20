const Auth = () => {
    
    const role = localStorage.getItem('role')
    const token = localStorage.getItem('accessToken')
    if(token){
        if(role==='user'){
            window.open(
                `${import.meta.env.VITE_CLIENT_URL}/dashboard`, "_self"
            )
        }
        else if(role === 'mod'){
            window.open(
                `${import.meta.env.VITE_CLIENT_URL}/mod`, "_self"
            )
        }
        else if (role === 'admin'){
            window.open(
                `${import.meta.env.VITE_CLIENT_URL}/admin`, "_self"
            )
        }
    }
    else{
        return null
    }
}
export {Auth}