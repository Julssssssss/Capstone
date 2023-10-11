import LpCont1 from "../LandingPageContents/LpCont1"
import LpCont2 from "../LandingPageContents/LpCont2"
import Faq from "../LandingPageContents/Faq"
import Auth from "../components/Auth"
import { getAccessToken } from "../components/api/getAccessToken.js"
import { useEffect } from "react"
import axios from 'axios'

const LandingPage = () => {
  useEffect(()=>{
    getAccessToken()
  },[])

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