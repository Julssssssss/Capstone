import {Route, Routes, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
//test
import Dashboard from './pages/Dashboard'
import Help from '/src/navComponents/Help'
import LandingPage from './pages/LandingPage'
import Profile from '/src/pages/UserProfile'
import Item from '/src/pages/ItemDetails'
import Confirmation from '/src/pages/Confirmation'
import SignUpSecQ from './pages/SignUpSecQ'
import SecSignUp from './pages/SecSignUp'
import Authenticate from './components/RefreshToken'
import {useAccessToken} from './components/api/useAccessToken'


const App = () => {

  useAccessToken()
  
  
  return (
    <>

      {/* eto yung red pang debug to*/}
      <style>
        {`*{outline: solid red}`}
      </style>

      <div>
        <Routes>
          {/*default view */}
          
          <Route path='/' element={<LandingPage/>}/>
          {/*pag gusto mo mag-add pa ng ibang path declare mo muna dito*/}
          
        </Routes>
      </div>
   </>
  )
}

export default App