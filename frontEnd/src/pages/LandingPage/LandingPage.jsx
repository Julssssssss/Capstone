import LpCont1 from "./components/LpCont1"
import LpCont2 from "./components/LpCont2"
import Faq from "./components/Faq"
import {Auth} from "../../components/Auth"
import { getAccessTokenAndRole } from "./components/getAccessTokenAndRole"
import { useState, useEffect } from "react"

const LandingPage = () => {

  const [loading, setLoading] = useState(true)

  const redirect = async()=>{
    await getAccessTokenAndRole()
    await Auth()
  }
  
  useEffect(()=>{
    redirect()
    setLoading(false)
  },[])

  if(loading){
    return <div>LOADING!</div>
  }

  return (
    <>
        <div className="bg-[#0d1832] flex flex-col w-screen h-screen">
            <LpCont1/>
            <LpCont2/>
            <Faq/>
        </div>
    </>
  )
}

export default LandingPage