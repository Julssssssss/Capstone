import { Outlet, Link } from 'react-router-dom'
import '/src/css/auth.css'
import LoginButton from '/src/components/LoginButton.jsx'
import LogoutButton from '/src/components/LogoutButton.jsx'

const authForm = () => {
  return (
<>
    <div className="container">
        <div className='boxes'>
      {/* set aside muna kasi may tatry pa ako na iba for designs*/}
          <div className='userForm'>
             
          </div>
        </div>
        
    </div>
</>
  )
}

export default authForm