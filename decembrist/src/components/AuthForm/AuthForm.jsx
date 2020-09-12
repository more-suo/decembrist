import React, {Component} from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ResetForm from "../ResetForm/ResetForm";
import "./AuthForm.css";

class AuthForm extends Component {
    state = {
        action: "login",
    }

    setForm = (form) => {
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
            form = <LoginForm setForm={this.setForm} />
        } else if (this.state.action === "reset") {
            form = <ResetForm setForm={this.setForm} />
        } else if (this.state.action === "registration") {
            form =
                <div>
                    { <RegistrationForm /> }
                    <div className="back-to-login">
                        <span id="change-to-login-form" onClick={this.setForm.bind(this, "login")}>
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