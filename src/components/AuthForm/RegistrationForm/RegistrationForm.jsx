import React, {Component} from "react";
import './RegistrationForm.css';

class RegistrationForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
    }

    setUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleRegistration = () => {

    }

    render() {
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
                <button className="registration-button" type="button" id="sign-up-button">
                    Sign Up
                </button>
                <div className="back-to-login">
                <span id="change-to-login-form" onClick={this.props.setForm.bind(this, "login")}>
                    We're already acquainted.
                </span>
                </div>
            </div>
        )
    }
}

export default RegistrationForm