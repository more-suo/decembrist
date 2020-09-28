import React, {Component} from "react";
import UploadSolutionForm from "../UploadSolutionForm/UploadSolutionForm";
import Tabs from "../Tabs/Tabs";
import "./Sidebar.css";


class Sidebar extends Component {
    render() {
        const sidebar_status = this.props.isToggled ? "toggled" : "active";
        return (
            <div className={`sidebar ${sidebar_status}`}>
                <Tabs tabsTitle={this.props.tabTitles}/>
                <UploadSolutionForm />
            </div>
        )
    }
}

export default Sidebar