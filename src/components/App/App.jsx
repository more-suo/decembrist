import React, {Component} from "react";
// import Contest from "../Contest/Contest";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import LoginForm from "../LoginForm/LoginForm";
import {JuliaAPI} from "julia-api"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "login",
        }
    }

    setApp = (AppName) => {
        this.setState({
            app: AppName
        })
    }

    render() {
        let api = new JuliaAPI('localhost:8000', false);
        let window = [];

        if (this.state.view === "login"){
            window.push(<LoginForm api={api}/>);
        {/*} else if (this.state.app === "contest"){*/}
        {/*    window.push(<Contest setApp={this.setApp}/>)*/}
        }else if (this.state.view === "main") {
            window.push(<MainPage setApp={this.setApp}/>);
        }else {
            window.push(<h1 className="errorMessage">What are you trying to do? Error 404! :|</h1>);
        }

        return window;
    }
}

export default App