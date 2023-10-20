
const Auth = () => {
    
    const role = localStorage.getItem('role')
    const token = localStorage.getItem('accessToken')
    if(token){
        if(role==='user'){
            window.location.href = `${import.meta.env.VITE_CLIENT_URL}/dashboard`
        }
        else if(role === 'mod'){
            window.location.href = `${import.meta.env.VITE_CLIENT_URL}/mod`
        }
        else if (role === 'admin'){
            window.location.href = `${import.meta.env.VITE_CLIENT_URL}/admin`
        }
    }
    else{
        return null
    }
}
export {Auth}