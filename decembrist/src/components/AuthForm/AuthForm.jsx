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
        let form = "This is a form."
        if (this.state.action === "login") {
            form = <LoginForm setForm={this.setForm} />
        } else if (this.state.action === "reset") {
            form = <ResetForm setForm={this.setForm} />
        } else if (this.state.action === "registration") {
            form = <RegistrationForm setForm={this.setForm} />
        }

        return (
            <div className="box">
                { form }
            </div>
        )
    }
}

export default AuthForm