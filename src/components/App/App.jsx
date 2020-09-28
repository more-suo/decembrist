import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import Contest from "../Contest/Contest";
import "./App.css";

class App extends Component {
    state = {
        app: "contest",
        sidebarIsToggled: true,
    }

    setApp = (AppName) => {
        this.setState({
            app: AppName
        })
    }


    handleKeyPress = (event) => {
        console.log(event.key + " pressed")
        if(event.key === "ArrowRight"){
            this.setState({
                sidebarIsToggled: false,
            })
        } else if(event.key === "ArrowLeft"){
            this.setState({
                sidebarIsToggled: true,
            })
        }
    }

    render() {
        let window = [];
        if (this.state.app === "auth"){
            window.push(<AuthForm setApp={this.setApp}/>)
        } else if (this.state.app === "contest"){
            window.push(<Contest setApp={this.setApp}/>)
        } else {
            window.push(<h1>What are you trying to do? Error 404! :|</h1>)
        }

        return window

    }
}

export default App