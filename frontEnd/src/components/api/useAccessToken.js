import { useState, useEffect } from "react"
import {axiosPriv} from "./axios.js"

 export const useAccessToken = () => {

    const uri = `${import.meta.env.VITE_API_URL}/auth/login/success`
  
    const fetchToken = async()=>{
      try{
        const response = await axiosPriv.get(uri)
        localStorage.setItem('accessToken', response.data.accessToken)
      }
      catch(err){ console.log(err)}
    }
  
    useEffect(()=>{
  
      fetchToken()
      
    },[])
    return fetchToken
}