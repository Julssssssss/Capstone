import { useState, useEffect } from "react"
import axios from 'axios'

 export const getAccessToken = () => {

    const uri = `${import.meta.env.VITE_API_URL}/auth/login/success`
  
    const fetchToken = async()=>{
      try{
        const response = await axios.get(uri, {withCredentials: true})
        localStorage.setItem('accessToken', response.data.accessToken)
      }
      catch(err){ console.log(err)}
    }
  
    useEffect(()=>{
      fetchToken()
    },[])
    console.log(localStorage.getItem('accessToken'))
    localStorage.getItem('accessToken')
}