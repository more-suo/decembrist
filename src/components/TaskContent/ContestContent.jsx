import React, {Component} from "react";
import TabContent from "../TabContent/TabContent";
import GreetMessage from "../GreetMessage/GreetMessage";
import Sidebar from "../Sidebar/Sidebar";
import StandingsTable from "../StandigsTable/StandingsTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import "./ContestContent.css";


class ContestContent extends Component {
    state = {
        activeTab: 0,
        sidebarIsToggled: true,
        tableIsToggled: true,
        tabContents: {},
        tabTitles: {},
        tasks: []
    }

    componentDidMount() {
        this.props.api.listContestTasks(this.props.contest.id).then(
            (response) => {
                let tab_contents = {};
                let tab_titles = {};
                response.data.results.forEach(
                    (task) => {
                        tab_contents[task.id] = (
                            <TabContent title={task.title}
                                        key={task.id}
                                        tl={task.tl}
                                        ml={task.ml}
                                        content={task.content}
                                        samples={task.samples}/>
                        );
                        tab_titles[task.id] = task.title;
                    })

                this.setState({
                    tasks: response.data.results,
                    tabContents: {...this.state.tabContents, ...tab_contents},
                    tabTitles: {...this.state.tabTitles, ...tab_titles},
                });
            }
        )
    }

    toggleSidebar = () => {
        this.setState({
            sidebarIsToggled: !this.state.sidebarIsToggled,
        });
    }

    handleKeyPress = (event) => {
        // console.log(event.key + " pressed")
        if (event.key === "ArrowRight"){
            this.setState({
                sidebarIsToggled: false,
            })
        } else if (event.key === "ArrowLeft"){
            this.setState({
                sidebarIsToggled: true,
            })
        } else if (event.key === "ArrowDown"){
            this.setState({
                tableIsToggled: true,
            })
        } else if (event.key === "ArrowUp"){
            this.setState({
                tableIsToggled: false,
            })
        }
    }

    activateTab = (tabId) => {
        this.setState({
            activeTab: tabId,
            tableIsToggled: true,
        })
    }

    render() {
        const content = (
            <div className={`window-box ${this.state.sidebarIsToggled ? "closed-sidebar" : "open-sidebar"}`}>
                <div className="main-window">
                    <div className="ContestContent">
                        {
                            this.state.tableIsToggled?
                                this.state.activeTab === 0?
                                    <GreetMessage sidebarIsToggled={this.state.sidebarIsToggled} toggleSidebar={this.toggleSidebar}/> :
                                    this.state.tabContents[this.state.activeTab] :
                                <StandingsTable taskTitles={this.state.tabTitles}/>
                        }
                    </div>
                </div>
            </div>
        )

        return (
            <div tabIndex="0" onKeyDown={(event => this.handleKeyPress(event))}>

                <Sidebar isToggled={this.state.sidebarIsToggled}
                         tabTitles={this.state.tabTitles}
                         activeTab={this.state.activeTab}
                         activateTab={this.activateTab}
                         api={this.props.api}
                         task_id={this.state.activeTab}/>

                <FontAwesomeIcon onClick={this.toggleSidebar}
                                 icon={this.state.sidebarIsToggled? faAngleRight : faAngleLeft}
                                 className="angle-sidebar-toggler"/>

                { content }

            </div>
        )
    }
}

export default ContestContent
