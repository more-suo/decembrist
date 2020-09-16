import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import Contest from "../Contest/Contest";
import "./App.css";

class App extends Component {
    state = {
        app: "auth"
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
        }
        return (
            <div>
                { window }
            </div>
        )
    }
}

export default App