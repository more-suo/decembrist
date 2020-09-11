import React, {Component} from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ResetForm from "../ResetForm/ResetForm";
import "./AuthForm.css";


class AuthForm extends Component {
    state = {
        action: "login",
    }


    changeToForm = (form) => {
        this.setState({
            action: form,
        })
    }

    render() {
        let form =
            <div>
                This is a form.
            </div>;
        if (this.state.action === "login") {
            form =
                 <div>
                     { <LoginForm /> }
                     <div className="unusual-actions">
                         <div className="reset-password">
                             <span onClick={this.changeToForm.bind("reset")} id="change-to-reset-password-form">
                                 I forgot my password.
                             </span>
                         </div>
                         <div className="registration">
                             <span onClick={this.changeToForm.bind("registration")} id="change-to-registration-form">
                                 We're not acquainted.
                             </span>
                         </div>
                     </div>
                 </div>
        } else if (this.state.action === "reset") {
            form =
                <div>
                    { <ResetForm /> }
                    <div className="back-to-login">
                        <span id="change-to-login-form" onClick={this.changeToForm.bind("login")}>
                            I remembered my password.
                        </span>
                    </div>
                </div>
        } else if (this.state.action === "registration") {
            form =
                <div>
                    { <RegistrationForm /> }
                    <div className="back-to-login">
                        <span id="change-to-login-form" onClick={this.changeToForm.bind("login")}>
                            We're already acquainted.
                        </span>
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