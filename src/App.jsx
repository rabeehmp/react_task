import "./App.css"
import { useState } from "react"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';


function App(){

  const [username, setUsername]= useState('')
  const [password, addPassword]= useState('')

  const login_action = () =>{
    alert(username+" is usernme and "+password+ " is password")
  }


  // Linkedin authenticaton function
  const { linkedInLogin } = useLinkedIn({
    // client id generated from linkedin/developer
    clientId: '86lwq33kjcy4lk',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return(
    <div className="App">
      <div className="loginContainer">
        <h1 className="font_s">Login Screen</h1>

        <div className="input-container">
          <label className="font_s">Username </label>
          <input type="text" name="uname" required value={username} onChange={e=>setUsername(e.target.value)} />
    

        </div>
        <div className="input-container">
          <label className="font_s">Password </label>
          <input type="password" name="pass" required value={password} onChange={e=>addPassword(e.target.value)} />
        
        
        </div>

        <a href="#" className="font_s">Forgot password?</a>
        <a href="#" className="font_s">Create a new account</a>

        <button onClick={login_action} className="loginBut">
          <p>Login</p>
        </button>

  

        <button className="siG">
          
        <GoogleLogin
        onSuccess={credentialResponse => {
        console.log(credentialResponse,"Got the user data");
        const decoded = jwtDecode(credentialResponse.credential);
        console.log("decoded with a guess", decoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />;
          
        </button> 
        <img
      onClick={linkedInLogin}
      src={linkedin}
      alt="Sign in with Linked In"
      style={{ maxWidth: '180px', cursor: 'pointer' }}
    />
      </div>
    </div>
  )
 

}

export default App;