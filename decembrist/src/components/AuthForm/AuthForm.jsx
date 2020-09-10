import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ResetForm from "../ResetForm/ResetForm";
import "./AuthForm.css";

function changeToLoginForm() {
    console.log(123)
}

function changeToResetForm() {
    console.log(123)
}

function changeToRegistrationForm() {
    console.log(123)
}

function AuthForm() {
    return (
        <div className="box">
            { <ResetForm /> }
            <div className="back-to-login">
                <span id="change-to-login-form" onClick={changeToLoginForm}>I remembered my password.</span>
            </div>
        </div>
    )
}

export default AuthForm