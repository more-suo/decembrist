import React, {Component} from "react";
import './ResetForm.css';

class ResetForm extends Component {
    render() {
        return (
            <div className="reset-form">
                <h2>Oh, let me help you.</h2>
                <div className="form-info" id="form-info">
                    Tell me your username or e-mail. <br/>
                    I'll send you a link to get back into your account.
                </div>
                <label htmlFor="UsernameOrEmail" />
                <input type="text" name="UsernameOrEmail" id="user-key" placeholder="Username or e-mail" />
                <button className="reset-button" type="button" id="reset-password-button">
                    Send
                </button>
                <div className="back-to-login">
                <span id="change-to-login-form" onClick={this.props.setForm.bind(this, "login")}>
                    I remembered my password.
                </span>
                </div>
            </div>
        )
    }
}

export default ResetForm