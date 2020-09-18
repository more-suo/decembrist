import React, {Component} from "react";
import AuthForm from "../AuthForm/AuthForm";
import Contest from "../Contest/Contest";
import Sidebar from "../Sidebar/Sidebar";
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

    toggleSidebar = () => {
        this.setState({
            sidebarIsToggled: !this.state.sidebarIsToggled,
        })
    }

    render() {
        let window = [];
        if (this.state.app === "auth"){
            window.push(<AuthForm setApp={this.setApp}/>)
        } else if (this.state.app === "contest"){
            window.push(<Contest setApp={this.setApp}/>)
        } else {
            window.push(
                <h1>
                    What are you trying to do? Error 404! :|
                </h1>
            )
        }
        return (
            <div>
                <div onClick={this.toggleSidebar}>
                    Toggle Sidebar
                </div>
                <Sidebar isToggled={this.state.sidebarIsToggled}/>
                { window }
            </div>
        )
    }
}

export default App