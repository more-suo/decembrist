import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./App.css";

class App extends Component {
    state = {
        app: "auth"
    }


    render() {
        if(this.state.app === "auth"){
            return (
                <div>
                    <AuthForm />
                </div>
            )
        }
    }
}

export default App