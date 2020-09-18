import React, {Component} from "react";
import "./Sidebar.css";

class Sidebar extends Component {
    render() {
        const sidebar_status = this.props.isToggled ? "toggled" : "active";
        return (
            <div className={`sidebar ${sidebar_status}`}>
                Sidebar
            </div>
        )
    }
}

export default Sidebar