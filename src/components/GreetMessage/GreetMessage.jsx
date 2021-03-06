import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "./GreetMessage.css";


class GreetMessage extends Component {
    render() {
        return (
            <div className="greetMessage">
                Press <FontAwesomeIcon icon={this.props.sidebarIsToggled? faAngleRight: faAngleLeft} onClick={this.props.toggleSidebar}/> to {this.props.sidebarIsToggled ? "open" : "close"} sidebar and choose task.
                Or use the <FontAwesomeIcon icon={faArrowLeft}/> or <FontAwesomeIcon icon={faArrowRight}/> keys. <br/>
                Use the <FontAwesomeIcon icon={faArrowUp}/> and <FontAwesomeIcon icon={faArrowDown}/> keys to open and/or close standings table.
            </div>
        )
    }
}

export default GreetMessage
