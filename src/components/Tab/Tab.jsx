import React, {Component} from "react";
import "./Tab.css";

class Tab extends Component {
    render() {
        return(
            <div className={`Tab ${this.props.active? "active" : ""}`}>
                {this.props.title}
            </div>
        )
    }
}

export default Tab