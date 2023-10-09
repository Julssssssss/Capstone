import { useState, useEffect } from "react"
import axios from 'axios'
import {useHistory} from 'react-router-dom'

 export const getAccessToken = () => {

    const uri = `${import.meta.env.VITE_API_URL}/auth/login/success`
    //pang redirect
    const history = useHistory()
  
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
    const token = localStorage.getItem('accessToken')
    //pag may token redirect
    token ? history.push('/dashboard') : null
}