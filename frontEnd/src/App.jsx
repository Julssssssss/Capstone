//test
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import UserLanding from './pages/userLanding'
import AuthForm from './pages/authForm'
import Home from './api/Home'
import {Route, Routes} from 'react-router-dom'



const App = () => {
  return (
    <>
    
   <div>
    <Routes>
      {/*default view */}
      <Route path='/' element={<UserLanding />}/>
      {/*pag gusto mo mag-add pa ng ibang path declare mo muna dito*/}
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/authForm' element={<AuthForm/>}/>
    </Routes>
   </div>
   </>
  )
}

export default App