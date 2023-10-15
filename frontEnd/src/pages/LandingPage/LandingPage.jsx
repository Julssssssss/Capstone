import LpCont1 from "./components/LpCont1"
import LpCont2 from "./components/LpCont2"
import Faq from "./components/Faq"
import Auth from "../../components/Auth"
import { useEffect, useContext, useState } from "react"
import { getAccessTokenAndRole } from "./components/getAccessTokenAndRole"

const LandingPage = () => {
  getAccessTokenAndRole()
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