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

    toggleSidebar = (bool=null) => {
        this.setState({
            sidebarIsToggled: !this.state.sidebarIsToggled,
        })
    }

    handleKeyPress = (event) => {
        console.log(event.keyCode)
        if(event.keyCode === 39){
            this.setState({
                sidebarIsToggled: false,
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

        return (
            <div tabIndex="0" onKeyPress={(event => this.handleKeyPress(event))}>
                <Sidebar isToggled={this.state.sidebarIsToggled}/>
                <div className={`window-box ${this.state.sidebarIsToggled ? "closed-sidebar" : "open-sidebar"}`}>
                    <div className="main-window">
                        <div onClick={this.toggleSidebar}>
                            {this.state.sidebarIsToggled ? "> Open" : "< Toggle"} Sidebar
                        </div>
                        { window }
                    </div>
                </div>
            </div>
        )
    }
}

export default App