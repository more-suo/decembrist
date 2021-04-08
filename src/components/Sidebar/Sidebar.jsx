import React, {Component} from "react";
import UploadSolutionForm from "../UploadSolutionForm/UploadSolutionForm";
import Tabs from "../Tabs/Tabs";
import "./Sidebar.css";


class Sidebar extends Component {
    render() {
        const sidebar_status = this.props.isToggled ? "toggled" : "active";
        return (
            <div className={`sidebar ${sidebar_status}`}>
                <Tabs tabsTitle={this.props.tabTitles}
                      activeTab={this.props.activeTab}
                      activateTab={this.props.activateTab}/>
                <UploadSolutionForm api={this.props.api}
                                    task_id={this.props.task_id}/>
            </div>
        )
    }
}

export default Sidebar