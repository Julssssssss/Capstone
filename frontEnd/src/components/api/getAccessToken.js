import { useState, useEffect } from "react"
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import { axiosFetchToken } from "./axios"

const uri = `${import.meta.env.VITE_API_URL}/auth/login/success`

 const getAccessToken = async() => {
    try{
      const response = await axios.get(uri, {withCredentials: true})
      const token = response.data.accessToken
      console.log(token)
    }
    catch(err){ console.log(err)}
  }
  export {getAccessToken}