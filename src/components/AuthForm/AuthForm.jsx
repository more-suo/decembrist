import React, {Component} from "react";
import axios from "axios";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import ResetForm from "./ResetForm/ResetForm";
import "./AuthForm.css";

class AuthForm extends Component {
    state = {
        action: "login",
        something: {},
    }

    componentDidMount() {
        axios.get("http://julia-api.azurewebsites.net/api/contests/?format=json")
            .then( res => {
                const result = res.data;
                console.log(result);
                this.setState({
                    something: result,
                })
            })
    }

    setForm = (form) => {
        this.setState({
            action: form,
        })
    }

    render() {
        console.log(this.state.something);
        let form = "This is a form."
        if (this.state.action === "login") {
            form = <LoginForm setForm={this.setForm}
                              setApp={this.props.setApp}/>
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