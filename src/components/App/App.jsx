import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import ContestWindow from "../ContestWindow/ContestWindow";
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
            window = <ContestWindow setApp={this.setApp}/>
        }
        return (
            <div>
                { window }
            </div>
        )
    }
}

export default App