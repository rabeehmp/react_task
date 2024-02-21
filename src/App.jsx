import "./App.css"
import { useState } from "react"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';


function App(){

  const [username, setUsername]= useState('')
  const [password, addPassword]= useState('')

  const HI = () =>{
    alert(username+" is usernme and "+password+ " is password")
  }

  console.log(window.location.origin)

  const { linkedInLogin } = useLinkedIn({
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
        <h1>Welcome Back!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required value={username} onChange={e=>setUsername(e.target.value)} />
    

        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required value={password} onChange={e=>addPassword(e.target.value)} />
        
        
        </div>

        <a href="#">Forgot password?</a>
        <a href="#">Create a new account</a>

        <button onClick={HI} className="loginBut">
          <p>Login</p>
        </button>

  

        <button className="siG">
          {/* <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign in with Google</p> */}
          <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse,"hello");
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