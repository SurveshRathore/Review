import React from "react";
import { useState } from "react";
import "./Login.css";

function Login (){


    const[LoginData, setLoginData] = useState({userName: '', passWord: ''})

    const takingUserName = (e) => {
        setLoginData(prevState => ({
            ...prevState,
            userName: e.target.value
        }))
    }

    const takingPassword = (e) => {
        setLoginData(prevState => ({
            ...prevState,
            passWord: e.target.value
        }))
    }

    console.log(LoginData)

const displayName = () => {
    alert(`Welcome ${LoginData.userName}, Your Password is ${LoginData.passWord}`)
}

    return(
        <div className="mainPage">
            <div className="mainContent">
                <div className="leftContent">
                    <div className="signInTitle">
                        <span>Sign In</span>

                    </div>
                    <div className="userNameBox">
                        <label>USERNAME</label>
                        <input className="inputBox" type="text" placeholder="Username" onChange={takingUserName}/>
                    </div>
                    <div className="passwordBox">
                        <label>PASSWORD</label>
                        <input className="inputBox" type="text" placeholder="Password" onChange={takingPassword}/>
                    </div>
                    <div className="SignInButton">
                        <button className="button" onClick={displayName}>Sign In</button>
                    </div>
                    <div className="rememberForget">
                        <input type="checkbox"/>
                        <span>Remember Me</span>
                        <span>Forget Password</span>
                    </div>
                </div>
                <div className="rightContent">
                    <div>
                        <h2>Welcome to login</h2>
                    </div>
                    <div>
                        <p>Don't have an account?</p>
                    </div>
                    <div className="signUpButton">
                        <button className="buttonSignUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
