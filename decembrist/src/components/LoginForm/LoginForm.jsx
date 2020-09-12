import React, {Component} from "react";
import './LoginForm.css';

class LoginForm extends Component {

    render() {
        return (
            <div className="box" id="main-form">
                <div className="login-form">
                    <h2>Hi, I'm Julia.</h2>
                    <div className="form-info" id="form-info">Tell me your username and password.</div>
                    <label htmlFor="username"/>
                    <input type="text" name="Username" id="username" placeholder="Username"/>
                    <label htmlFor="password"/>
                    <input type="password" name="Password" id="password" placeholder="Password" autoComplete="on"/>
                    <button className="login-button" type="button" id="login-button">
                        Login
                    </button>
                    <div className="change-form">
                        <div className="reset-password">
                             <span onClick={this.props.setForm.bind(this, "reset")} id="change-to-reset-password-form">
                                 I forgot my password.
                             </span>
                        </div>
                        <div className="registration">
                             <span onClick={this.props.setForm.bind(this, "registration")} id="change-to-registration-form">
                                 We're not acquainted.
                             </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm