import React, {Component} from "react";
import './LoginForm.css';
import Cookies from 'universal-cookie';


class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        info_message: "Tell me your username and password."
    }

    setUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = () => {
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
        }

        this.login();
    }


    login = () => {
        const api = "https://julia-api-server.herokuapp.com/api/"
        let user = {
            username: this.state.username,
            password: this.state.password,
        }

        fetch(api + "token-auth",{
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
                    case 200:
                        this.get_refresh_token(data.token);
                        this.props.setApp("contest");
                        break;
                    case 400:
                        // TODO: Wrong username or password
                        break;
                    default:
                    // TODO: handle unexpected responses
                }
            })
            .catch( err => {
                console.log(err);
            })
    }

    get_refresh_token = (JWT) => {
        const api = "http://localhost:8000/api/"
        let request = {
            token: JWT,
        }

        fetch(api + "token-refresh",{
            method: "POST",
            body: JSON.stringify(request),
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
                    case 200:
                        const cookies = new Cookies();
                        cookies.set('JWT', data.token, { path: '/', sameSite: 'lax', expires: new Date(Date.now()+604800) });
                        this.props.setApp("contest");
                        break;
                    case 400:
                        // TODO: Wrong token
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
            <div className="login-form">
                <h2>Hi, I'm Julia.</h2>
                <div className="form-info" id="form-info">{this.state.info_message}</div>
                <label htmlFor="username"/>
                <input type="text"
                       placeholder="Username"
                       value={this.state.username}
                       onChange={this.setUsername}/>
                <label htmlFor="password"/>
                <input type="password"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.setPassword}
                       autoComplete="on"/>
                <button className="login-button" type="button" id="login-button" onClick={this.handleLogin}>
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
        )
    }
}

export default LoginForm