import React from "react";
import './LoginForm.css';

function LoginForm() {
    return (
        <form className="box" name="main-form" id="main-form">
            <div className="login-form">
                <h2>Hi, I'm Julia.</h2>
                <div className="form-info" id="form-info">Tell me your username and password.</div>
                <label htmlFor="username"/>
                <input type="text" name="Username" id="username" placeholder="Username"/>
                <label htmlFor="password"/>
                <input type="password" name="Password" id="password" placeholder="Password" autoComplete="on"/>
                <button className="major-button" type="button" name="Login" value="Login" id="login-button">
                    Login
                </button>
                <div className="unusual-actions">
                    <div className="reset-password">
                        <span id="change-to-reset-password-form">I forgot my password.</span>
                    </div>
                    <div className="registration">
                        <span id="change-to-registration-form">We're not acquainted.</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm