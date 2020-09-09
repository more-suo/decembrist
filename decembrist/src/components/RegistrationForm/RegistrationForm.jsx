import React from "react";
import './RegistrationForm.css';

function RegistrationForm() {
    return (
        <div className="registration-form">
            <h2>Let's get acquainted!</h2>
            <div className="form-info" id="form-info">
                I need your future username, <br/>
                your e-mail & your future password.
            </div>
            <label htmlFor="reg-username" />
            <input type="text" name="reg-Username" id="reg-username" placeholder="Username" />
            <label htmlFor="reg-e-mail" />
            <input type="text" name="reg-E-mail" id="reg-e-mail" placeholder="E-mail" />
            <label htmlFor="reg-password" />
            <input type="password" name="reg-Password" id="reg-password" placeholder="Password" autoComplete="on" />
            <button className="major-button" type="button" name="Sign-Up" value="Sign-Up" id="sign-up-button">
                Sign Up
            </button>
            {/*<div className="back-to-login">*/}
            {/*    <span id="change-to-login-form" onClick={changeToLoginForm}>We're already acquainted.</span>*/}
            {/*</div>*/}
        </div>

)
}

export default RegistrationForm