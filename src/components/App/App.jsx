import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import Contest from "../Contest/Contest";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";

class App extends Component {
    state = {
        app: "contest"
    }

    setApp = (AppName) => {
        this.setState({
            app: AppName
        })
    }

    render() {
        let window;
        if (this.state.app === "auth"){
            window = <AuthForm setApp={this.setApp}/>
        } else if (this.state.app === "contest"){
            window = <Contest setApp={this.setApp}/>
        } else {
            window =
                <h1>
                    What are you trying to do? Error 404! :|
                </h1>
        }
        return (
            <div>
                <Sidebar/>
                { window }
            </div>
        )
    }
}

export default App