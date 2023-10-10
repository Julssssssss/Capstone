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
import Admin from './pages/Admin'
import Page404 from './pages/Page404'
import RequireAuth from './components/RequireAuth'


const App = () => {
  const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }


  return (
    <>

      {/* eto yung red pang debug to*/}
      <style>
        {`*{outline: solid red}`}
      </style>

      <div>
        <Routes>
          {/* Default view */}
          <Route path='/' element={<LandingPage />} />

          {/* Routes protected by authentication for regular users */}
          <Route
            element={<RequireAuth allowedRoles={[ROLES.User]} />}
          >
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Confirmation' element={<Confirmation />} />
            <Route path='/Item/:itemId' element={<Item />} />
            <Route path='/Help' element={<Help />} />
            <Route path='/Profile' element={<Profile />} />
          </Route>

          {/* Routes protected by authentication for admin users */}
          <Route
            element={<RequireAuth allowedRoles={[ROLES.Admin]} />}
          >
            <Route path='/Admin' element={<Admin />} />
          </Route>

          {/* 404 Page */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
   </>
  )
}

export default App