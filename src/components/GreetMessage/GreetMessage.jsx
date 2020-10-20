import React, {Component} from "react";
import "./GreetMessage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

class GreetMessage extends Component{
    render() {
        return (
            <div className={`greetMessageContainer ${this.props.sidebarIsToggled? ".closed-sidebar" : ".open-sidebar"}`}>
                <div className="greetMessage">
                    Press <FontAwesomeIcon icon={faAngleRight}/> to open sidebar and choose task.
                    Or press the <FontAwesomeIcon icon={faArrowLeft}/> or <FontAwesomeIcon icon={faArrowRight}/> keys.
                </div>
            </div>
        )
    }
}

export default GreetMessage
