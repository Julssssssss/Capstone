import {Route, Routes, Navigate} from 'react-router-dom'
//test
import Dashboard from './pages/User/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage/LandingPage'
import Page404 from './pages/404/Page404'
import UserProfile from './pages/User/UserProfile/UserProfile'
import ItemDetails from './pages/User/itemDetails/ItemDetails'
import Confirmation from './pages/User/Confirmation/Confirmation'
import Page401 from './pages/404/Page401'
import adminDashboard from './pages/Moderator/adminDashboard'
import HlpDocumentation from './pages/Moderator/HlpDocumentation'

const App = () => {
  //nababaliw ka na san mo lalagay yung accessToken kasi wala kayong rtk
  
  //kunin nyo to if may gusto kayo comment
  {/* */}
  
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
            <Route path='/Item/:itemId' element={<ItemDetails/>}/>
            <Route path='/Confirmation' element={<Confirmation/>}/>

          {/*Admin/Mod Side*/}

          <Route path='/Admin/Dashboard' element={<adminDashboard/>}/>
          <Route path='/Admin/HlpDocs' element={<HlpDocumentation/>}/>
            
          
          {/* 404 page  catch all  palitan to in the future hopefully ng 404 page tlga */}
          <Route path='/401' element={<Page401/>}/>
          <Route path='*' element={<Page404/>}/>
          
        </Routes>
      </div>
   </>
  )
}

export default App