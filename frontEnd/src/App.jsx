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


const App = () => {
 
  const [user, setUser] = useState(null);

  //fetch user data
  const fetchUser = async() => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login/success`, {withCredentials: true});
      setUser([res.data]);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  }
  useEffect(() => {
    // Call the asynchronous function
    fetchUser();
  }, []); // Empty dependency array means this effect will run once on mount

  return (
    <>

      {/* eto yung red pang debug to*/}
      <style>
        {`*{outline: solid red}`}
      </style>

      <div>
        <Routes>
          {/*default view */}
          
          <Route path='/' element={user ? <Navigate to="/Dashboard"/> : <LandingPage/>}/>
          {/*pag gusto mo mag-add pa ng ibang path declare mo muna dito*/}
          <Route exact path='/SecQ1' element={user ? <SecSignUp User={user}/> : <Navigate to="/"/>}/>
          <Route exact path='/Dashboard' element={user ? <Dashboard User={user}/> : <Navigate to="/"/>}/>
          <Route exact path='/Confirmation' element={user ? <Confirmation/> : <Navigate to="/"/>}/>
          <Route exact path='/Item/:itemId' element={user ? <Item/> : <Navigate to="/"/>}/>
          <Route exact path='/Help' element={user ? <Help/> : <Navigate to="/"/>}/>
          <Route exact path='/Profile' element={user ? <Profile User={user}/> : <Navigate to="/"/>}/>
        </Routes>
      </div>
   </>
  )
}

export default App