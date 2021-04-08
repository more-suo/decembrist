import React, {Component} from "react";
import './ResetConfirmForm.css';

class ResetConfirmForm extends Component {
    state = {
        token: "",
        password: "",
    }

    setToken = (event) => {
        this.setState({
            token: event.target.value,
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    handlePasswordResetConfirm = () => {
        if (this.state.token === ""){
            this.setState({
                // Add info_message: "I need your username or email, tell me!"
            })
            return false;
        }

        if (this.state.password === ""){
            this.setState({
                // Add info_message: "I need your username or email, tell me!"
            })
            return false;
        }

        let [id, key] = this.state.token.split('_')

        this.props.api.resetPasswordConfirm(
            id, key, this.state.password
        ).then( (response) => {
            switch (response.status){
                case 204:
                    // TODO: Password Changed
                    this.props.setForm('login');
                    break;
                case 400:
                    //     TODO: handle invalid data from user: incorrect format or type of input data
                    break;
                case 418:
                    // TODO: Incorrect token
                    break;
                default:
                // TODO: handle unexpected responses
            }
        })
    }


    render() {
        return (
            <div className="reset-form">
                <h2>Enter token from mail</h2>
                <label htmlFor="UsernameOrEmail" />
                <input type="text" name="UsernameOrEmail" id="user-key" placeholder="Username or e-mail" onChange={this.setToken} />
                <input type="text" name="UsernameOrEmail" id="user-key" placeholder="Username or e-mail" onChange={this.setPassword} />
                <button className="reset-button" type="button" id="reset-password-button" onClick={this.handlePasswordResetConfirm}>
                    Send
                </button>
                <div className="back-to-login">
                    <span id="change-to-login-form" onClick={this.props.setForm.bind(this, "reset")}>
                        I have no token
                    </span>
                </div>
            </div>
        )
    }
}

export default ResetConfirmForm