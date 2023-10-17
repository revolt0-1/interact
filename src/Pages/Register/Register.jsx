import { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';







export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleClick= async (e)=>{
    e.preventDefault()
    if(password.current.value !== passwordAgain.current.value){
      password.current.setCustomValidity("Password doesn't match!")
    }

    else{
    const user={
        username: username.current.value,
        email: email.current.value,
        password:password.current.value
      };
      try {
        await axios.post('/auth/register', user)
        navigate("/login")
      } catch(err) {
        console.log(err)
      }
    }
  }
  return (
  <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Interact</h3>
            <span className="loginDesc">Connect with friends and the world around you!!</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick} >
                <input placeholder="Username" 
                className="loginInput" 
                ref={username}
                required 
                />
                <input placeholder="Email" 
                className="loginInput"
                 ref={email} 
                 required 
                 />
                <input placeholder="password" 
                type="password" className="loginInput" 
                ref={password} 
                required 
                />
                <input placeholder="Password Again"
                 type="password" className="loginInput" 
                 ref={passwordAgain} 
                 required 
                 />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Log into account</button>
            </form>
        </div>
    </div>
  </div>
  )
}
