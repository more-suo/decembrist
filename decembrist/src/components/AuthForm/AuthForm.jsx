import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ResetForm from "../ResetForm/ResetForm";
import "./AuthForm.css";

function AuthForm() {
    return (
        <div className="box">
            <LoginForm />
        </div>
    )
}

export default AuthForm