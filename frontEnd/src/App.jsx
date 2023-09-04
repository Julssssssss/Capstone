import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLanding from './pages/userLanding.jsx'
import AuthForm from './pages/authForm.jsx'



const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLanding/>}/>
      <Route path="landing" element={<AuthForm />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App