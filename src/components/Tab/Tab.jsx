import React, {Component} from "react";
import "./Tab.css";

class Tab extends Component {
    render() {
        return(
            <div onClick={this.props.activateTab.bind(this, 1)}
                 className={`Tab ${this.props.active? "active" : ""}`}>
                {this.props.title}
            </div>
        )
    }
}

export default Tab