import React, {Component} from "react";
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

class AuthForm extends Component {
    state = {
        action: "login",
    }

    render() {
        let form;
        if (this.state.action === "login") {
            form =
                 <div>
                     { <LoginForm /> }
                     <div className="unusual-actions">
                         <div className="reset-password">
                             <span onClick={changeToResetForm} id="change-to-reset-password-form">I forgot my password.</span>
                         </div>
                         <div className="registration">
                             <span onClick={changeToRegistrationForm} id="change-to-registration-form">We're not acquainted.</span>
                         </div>
                     </div>
                 </div>
        } else if (this.state.action === "reset") {
            form =
                <div>
                    { <ResetForm /> }
                    <div className="back-to-login">
                        <span id="change-to-login-form" onClick={changeToLoginForm}>I remembered my password.</span>
                    </div>
                </div>
        } else if (this.state.action === "registration") {
            form =
                <div>
                    { <RegistrationForm /> }
                    <div className="back-to-login">
                        <span id="change-to-login-form" onClick={changeToLoginForm}>We're already acquainted.</span>
                    </div>
                </div>
        }
        return (
            <div className="box">
                { form }
            </div>
        )
    }
}

export default AuthForm