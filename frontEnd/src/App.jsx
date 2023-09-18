//test
import Dashboard from './pages/Dashboard'
import {Route, Routes} from 'react-router-dom'
import Help from '/src/navComponents/Help'
import LandingPage from './pages/LandingPage'
import Profile from '/src/pages/Profile'
import Item from '/src/pages/ItemDetails'
import Confirmation from '/src/pages/Confirmation'



const App = () => {
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
          <Route exact path='/Dashboard' element={<Dashboard/>}/>
          <Route exact path='/Confirmation' element={<Confirmation/>}/>
          <Route exact path='/Item' element={<Item/>}/>
          <Route exact path='/Help' element={<Help/>}/>
          <Route exact path='/Profile' element={<Profile/>}/>
        </Routes>
      </div>
   </>
  )
}

export default App