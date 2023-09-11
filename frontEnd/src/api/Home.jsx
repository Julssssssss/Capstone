import { useEffect, useState } from "react"
import Login from './Login'
import Logout from './Logout'
import Signup from "./Signup"
import axios from 'axios'

const Home = () => {
    const [user, setUser]=useState(null)

    const getUser = async()=>{
        try{
            const url =`${import.meta.env.VITE_API_URL}/auth/login/success`
            const {data} = await axios.get(url, {withCredentials: true})
            setUser(data.user.json)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUser()
    },[])

  return (
    <div>
        <Login/>
        
    </div>
  )
}

export default Home