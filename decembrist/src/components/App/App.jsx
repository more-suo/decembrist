import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
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
        if(this.state.app === "auth"){
            return (
                <div>
                    <AuthForm setApp={this.setApp}/>
                </div>
            )
        }
    }
}

export default App