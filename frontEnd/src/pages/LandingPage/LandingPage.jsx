import LpCont1 from "./components/LpCont1"
import LpCont2 from "./components/LpCont2"
import Faq from "./components/Faq"
import {Auth} from "./components/Auth"
import { getAccessTokenAndRole } from "./components/getAccessTokenAndRole"
import {useEffect } from "react"

const LandingPage = () => {

  const redirect = async()=>{
    await getAccessTokenAndRole()
    await Auth()
  }
  
  useEffect(()=>{
    redirect()
  },[])
  
  return (
    <>
        <div className="bg-[#0d1832] flex flex-col overflow-x-hidden overflow-y-auto w-auto h-auto">
            <LpCont1/>
            <LpCont2/>
            <Faq/> 
        </div>
    </>
  )
}

export default LandingPage