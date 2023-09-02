import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
//wag kalimutan ilagay .env sa gitignore
const Dom=process.env.REACT_APP_DOMAIN;
const ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(process.env.REACT_APP_DOMAIN)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={Dom}
      clientId = {ClientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>,
)
