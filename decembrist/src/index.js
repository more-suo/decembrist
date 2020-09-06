import React from 'react';
import {render} from 'react-dom';
import './index.css'


function LoginForm() {
    return (
        <form className="box" name="main-form" id="main-form">
            <div className="login-form">
                <h2>Hi, I'm Julia.</h2>
                <div className="form-info" id="form-info">Tell me your username and password.</div>
                <label htmlFor="username"></label>
                <input type="text" name="Username" id="username" placeholder="Username"></input>
                <label htmlFor="password"></label>
                <input type="password" name="Password" id="password" placeholder="Password" autoComplete="on"></input>
                    <button className="major-button" type="button" name="Login" value="Login"
                            id="login-button">Login
                    </button>
                    <div className="unusual-actions">
                        <div className="reset-password"><span id="change-to-reset-password-form">I forgot my password.</span>
                        </div>
                        <div className="unusual-actions-sep">||</div>
                        <div className="registration"><span
                            id="change-to-registration-form">We're not acquainted.</span></div>
                    </div>
            </div>
        </form>
    )
}


render(<App/>, document.getElementById('App'))