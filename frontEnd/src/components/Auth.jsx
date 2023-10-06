import { useState, useEffect } from "react"

const Auth = () => {

    const uri = `${import.meta.env.VITE_API_URL}/login/success`
    const [user, setUser] =useState(null)

    useEffect(()=>{
        const fetchToken = async()=>{
          try{
            const response = await axios.get(uri, {withCredentials: true})
            setUser(response.data)
          }
          catch(err){ console.log(err)}
        }
    },[])
    return console.log(user)
}

export default Auth