import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // Client id I have generated from google cloud platform
    <GoogleOAuthProvider clientId="108312838565-b4chlqctb8kcb2e2nl4kv56im5k3m86f.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  // </React.StrictMode>,
)
