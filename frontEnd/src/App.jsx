import {Route, Routes, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
//test
import Dashboard from './pages/Dashboard/Dashboard'
import Help from './navComponents/Help'
import LandingPage from './pages/LandingPage/LandingPage'
import Profile from './pages/UserProfile/UserProfile'
import Item from './pages/ItemDetails/ItemDetails'
import Confirmation from './pages/Confirmation/Confirmation'
import SignUpSecQ from './pages/NotSure/SignUpSecQ'
import SecSignUp from './pages/NotSure/SecSignUp'
import Authenticate from './components/RefreshToken'
import {getAccessToken} from './components/api/getAccessToken'
import Auth from './components/Auth'
import Page404 from './pages/404/Page404'
import UserProfile from './pages/UserProfile/UserProfile'

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