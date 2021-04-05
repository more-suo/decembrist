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

        const api = "http://localhost:8000/api/"
        let user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            // TODO: Add email_template: some_file,
        }

        fetch(api + "users/",{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then( (response) => {
                return Promise.all([response.status, response.json()]);
            })
            .then( ([status, data]) => {
                console.log(status);
                console.log(data);
                switch (status){
                    case 201:
                        // TODO: Display a request to check mail and activate account
                        break;
                    case 400:
                        if (data.username) {
                            console.log(data.password);
                        }else if (data.password) {
                            console.log(data.password);
                        }else if (data.email){
                            console.log(data.email);
                        }else{
                            console.log('A user with that username already exists.');
                        }

                        console.log(data);
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
            .catch( err => {
                console.log(err);
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