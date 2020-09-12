import React from "react";
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="box" id="main-form">
            <div className="login-form">
                <h2>Hi, I'm Julia.</h2>
                <div className="form-info" id="form-info">Tell me your username and password.</div>
                <label htmlFor="username"/>
                <input type="text" name="Username" id="username" placeholder="Username"/>
                <label htmlFor="password"/>
                <input type="password" name="Password" id="password" placeholder="Password" autoComplete="on"/>
                <button className="major-button" type="button" id="login-button">
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginForm