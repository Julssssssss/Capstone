import { useState, useEffect } from "react"
import {axiosPriv} from "./axios.js"

 export const useAccessToken = () => {

    const uri = `${import.meta.env.VITE_API_URL}/auth/login/success`
    const [user, setUser] = useState(axiosPriv)
  
    const fetchToken = async()=>{
      try{
        const response = await axiosPriv.get(uri)
        setUser(response.data.accessToken)
      }
      catch(err){ console.log(err)}
    }
  
    useEffect(()=>{
  
      fetchToken()
  
    },[])
    return console.log(user)
}