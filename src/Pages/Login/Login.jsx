import { useRef,useContext } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../Context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching  , dispatch} = useContext(AuthContext)
  const handleClick = (e)=>{
    e.preventDefault()
    loginCall(
      {email: email.current.value, password: password.current.value}
      ,dispatch
      )    
      console.log("Login-mihir",user)
    
       
  }
  return (
  <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Interact</h3>
            <span className="loginDesc">Connect with friends and the world around you!!</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                <input placeholder="Password" required type="password" 
                  minLength="6"
                className="loginInput" ref={password} />
                <button className="loginButton" disabled={isFetching}>{
                isFetching? "loading":"log In"}</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">{
                isFetching? "loading":"Create a New Account"}</button>
            </form>
        </div>
    </div>
  </div>
  )
}
