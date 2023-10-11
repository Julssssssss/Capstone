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
import {getAccessToken} from './components/api/getAccessToken'
import Auth from './components/Auth'
import Page404 from './pages/Page404'
import UserProfile from './pages/UserProfile'

const App = () => {
  //nababaliw ka na san mo lalagay yung accessToken kasi wala kayong rtk
  
  
  return (
    <>

      {/* eto yung red pang debug to*/}
      <style>
        {`*{outline: solid red}`}
      </style>

      <div>
        <Routes>
          {/*default view */}
          
            <Route exact path='/' element={<LandingPage/>}/>
          {/*pag gusto mo mag-add pa ng ibang path declare mo muna dito*/}

            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Profile' element={<UserProfile/>}/>
            <Route path='/Item/:itemId' element={<itemDetails/>}/>
            
          

          {/* 404 page  catch all  palitan to in the future hopefully ng 404 page tlga */}
          <Route path='*' element={<Page404/>}/>
          
        </Routes>
      </div>
   </>
  )
}

export default App