import React, {Component} from "react";
import Contest from "../Contest/Contest";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import LoginForm from "../LoginForm/LoginForm";
import {JuliaAPI} from "julia-api"

class App extends Component {
    constructor(props) {
        super(props);
        this.api = new JuliaAPI('localhost:8000', false);
        this.state = {
            view: "login",
        }
    }

    setApp = (AppName) => {
        this.setState({
            view: AppName
        })
    }

    render() {
        let window = [];
        let token = localStorage.getItem('JWT');
        console.log(this.state);
        if (token) {
            this.api.refreshToken(token).then(
                (response) => {
                    if (response.status === 200) {
                        this.api.setAuthToken(response.data.token);
                        localStorage.setItem('JWT', response.data.token);
                        this.setState( {
                            view: "contest",
                        })
                    }
                }
            )
        }

        if (this.state.view === "login"){
            window.push(<LoginForm api={this.api} setApp={this.setApp}/>);
        } else if (this.state.view === "contest"){
            window.push(<Contest api={this.api} setApp={this.setApp}/>);
        }else if (this.state.view === "main") {
            window.push(<MainPage setApp={this.setApp}/>);
        }else {
            window.push(<h1 className="errorMessage">What are you trying to do? Error 404! :|</h1>);
        }

        return window;
    }
}

export default App