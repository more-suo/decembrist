import React, {Component} from "react";
import "./Tab.css";

class Tab extends Component {
    state = {
    }

    render() {
        return(
            <div className={`Tab ${this.props.active? "active" : ""}`}>
                This is a tab
            </div>
        )
    }
}

export default Tab