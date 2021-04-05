import React, {Component} from "react";
import './RegistrationForm.css';

class RegistrationForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        info_message: "I need your future username, your e-mail & your future password.",
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
        if (this.state.username === ""){
            this.setState({
                info_message: "I need your username, tell me!"
            })
            return false;
        } else if (this.state.password === "") {
            this.setState({
                info_message: "I need your password too!"
            })
            return false;
        } else if (this.state.email === "") {
            this.setState({
                info_message: "What about your email?"
            })
            return false;
        }

        let options = new FormData();
        let parts = [
            'Hey, that\'s Julia. I am glad to see that you want to sign up. Plese press this button to verify your account:\n' +
            '\n' +
            '<table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
            '    <tr>\n' +
            '        <td>\n' +
            '            <table border="0" cellspacing="0" cellpadding="0">\n' +
            '                <tr>\n' +
            '                    <td bgcolor="#000000" style="padding: 12px 18px 12px 18px; border-radius:3px" align="center"><a href="{{link}}" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; display: inline-block;">Verify &rarr;</a></td>\n' +
            '                </tr>\n' +
            '            </table>\n' +
            '        </td>\n' +
            '    </tr>\n' +
            '</table>\n' +
            '\n' +
            'If you don\'t know what I\'m talking about, just ignore this message.'
        ];
        console.log(this.props.api)

        let file = new File(parts, 'decembrist_registration_template.html', {
            type: "text/html"
        });

        options.append('email_template', file);

        this.props.api.createUser(
            this.state.username,
            this.state.password,
            this.state.email,
            options,
        ).then( response => {
            switch (response.status){
                case 201:
                    // TODO: Display a request to check mail and activate account
                    break;
                case 400:
                    if (response.data.username) {
                        console.log(response.data.password);
                    }else if (response.data.password) {
                        console.log(response.data.password);
                    }else if (response.data.email){
                        console.log(response.data.email);
                    }else{
                        console.log('A user with that username already exists.');
                    }
                    // TODO: handle invalid data from user: incorrect format or type of input data
                    // if (email_template sent){ template does not contain substring {{link}} }
                    break;
                case 500:
                    // TODO: handle server error while creating activation object
                    // TODO: handle server error while emails are not sent
                    break;
                default:
                    // TODO: handle unexpected responses
            }
        })
    }

    render() {
        return (
            <div className="registration-form">
                <h2>Let's get acquainted!</h2>
                <div className="form-info"
                     id="form-info">
                    {this.state.info_message}
                </div>
                <label htmlFor="reg-username" />
                <input type="text"
                       name="reg-Username"
                       id="reg-username"
                       placeholder="Username"
                       onChange={this.setUsername}/>
                <label htmlFor="reg-e-mail" />
                <input type="text"
                       name="reg-E-mail"
                       id="reg-e-mail"
                       placeholder="E-mail"
                       onChange={this.setEmail}/>
                <label htmlFor="reg-password" />
                <input type="password"
                       name="reg-Password"
                       id="reg-password"
                       placeholder="Password"
                       autoComplete="on"
                       onChange={this.setPassword}/>
                <button className="registration-button"
                        type="button"
                        id="sign-up-button"
                        onClick={this.handleRegistration}>
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