import React, {Component} from "react";
import './ResetForm.css';

class ResetForm extends Component {
    state = {
        username_or_email: "",
    }

    setUsernameOrEmail = (event) => {
        this.setState({
            username_or_email: event.target.value,
        })
    }

    handlePasswordReset = () => {
        if (this.state.username_or_email === ""){
            this.setState({
                // Add info_message: "I need your username or email, tell me!"
            })
            return false;
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let request_data = {}
        // TODO: Add email_template: some_file,
        if (re.test(String(this.state.username_or_email).toLowerCase())) {
            request_data['email'] = this.state.username_or_email;
        }else{
            request_data['username'] = this.state.username_or_email;
        }

        this.props.api.resetPassword(
            request_data['username'], request_data['email']
        ).then( (response) => {
            switch (response.status){
                case 204:
                    // TODO: Activation email was sent
                    this.props.setForm('resetConfirm');
                    break;
                case 400:
                //     TODO: handle invalid data from user: incorrect format or type of input data
                    break;
                case 404:
                    // if (email_template sent){ template does not contain substring {{link}} }
                    // TODO: User with such credentials not found
                    break;
                case 429:
                //     TODO: The user must first respond to the activation email
                    break;
                case 500:
                //     TODO: handle server error while creating activation object
                    // TODO: handle server error while emails are not sent
                    break;
                default:
                // TODO: handle unexpected responses
            }
        })
    }


    render() {
        return (
            <div className="reset-form">
                <h2>Oh, let me help you.</h2>
                <div className="form-info" id="form-info">
                    Tell me your username or e-mail. <br/>
                    I'll send you a link to get back into your account.
                </div>
                <label htmlFor="UsernameOrEmail" />
                <input type="text" name="UsernameOrEmail" id="user-key" placeholder="Username or e-mail" onChange={this.setUsernameOrEmail} />
                <button className="reset-button" type="button" id="reset-password-button" onClick={this.handlePasswordReset}>
                    Send
                </button>
                <div className="back-to-login">
                    <span id="change-to-login-form" onClick={this.props.setForm.bind(this, "login")}>
                        I remembered my password.
                    </span>
                    <span id="change-to-login-form" onClick={this.props.setForm.bind(this, "resetConfirm")}>
                        Already have token.
                    </span>
                </div>
            </div>
        )
    }
}

export default ResetForm