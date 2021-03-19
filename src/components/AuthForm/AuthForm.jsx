import React, {Component} from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import ResetForm from "./ResetForm/ResetForm";
import "./AuthForm.css";

class AuthForm extends Component {
    state = {
        action: "login",
        actual_jwt: null,
        something: {},
    }

    setForm = (form) => {
        this.setState({
            action: form,
        })
    }

    setActualJWT = (jwt) => {
        this.setState({
            actual_jwt: jwt,
        })
    }

    render() {
        let form = "This is a form."
        if (this.state.action === "login") {
            form = <LoginForm setForm={this.setForm}
                              setApp={this.props.setApp}
                              setActualJWT={this.setActualJWT}/>
        } else if (this.state.action === "reset") {
            form = <ResetForm setForm={this.setForm}
                              setApp={this.props.setApp}/>
        } else if (this.state.action === "registration") {
            form = <RegistrationForm setForm={this.setForm}
                                     setApp={this.props.setApp}/>
        }

        return (
            <div className="box">
                { form }
            </div>
        )
    }
}

export default AuthForm