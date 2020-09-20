import React, {Component} from "react";
import UploadSolutionForm from "../UploadSolutionForm/UploadSolutionForm";
import "./Sidebar.css";

class Sidebar extends Component {
    render() {
        const sidebar_status = this.props.isToggled ? "toggled" : "active";
        return (
            <div className={`sidebar ${sidebar_status}`}>
                Task 1
                <UploadSolutionForm />
            </div>
        )
    }
}

export default Sidebar