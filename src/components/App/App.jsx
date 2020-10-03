import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import Contest from "../Contest/Contest";
import MainPage from "../MainPage/MainPage";
import "./App.css";


class App extends Component {
    state = {
        app: "contest",
    }

    setApp = (AppName) => {
        this.setState({
            app: AppName
        })
    }

    render() {
        let window = [];
        if (this.state.app === "auth"){
            window.push(<AuthForm setApp={this.setApp}/>)
        } else if (this.state.app === "contest"){
            window.push(<Contest setApp={this.setApp}/>)
        } else if (this.state.app === "MainPage"){
            window.push(<MainPage setApp={this.setApp}/>)
        } else {
            window.push(<h1 className="errorMessage">What are you trying to do? Error 404! :|</h1>)
        }

        return window
    }
}

export default App