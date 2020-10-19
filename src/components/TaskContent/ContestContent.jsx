import React, {Component} from "react";
import TabContent from "../TabContent/TabContent";
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

    componentWillReceiveProps(nextProps, nextContext) {
        const apiUrl = "https://julia-api-server.herokuapp.com/api/";
        nextProps.tasks.forEach( element => {
            fetch(apiUrl + "tasks/" + element.toString(), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
                .then(res => res.json())
                .then(result => {
                        this.state.tasks.push(result);

                        let tab_contents = {};
                        tab_contents[result.id] = (
                            <TabContent title={result.title}
                                        key={result.id}
                                        tl={result.tl}
                                        ml={result.ml}
                                        content={result.content}
                                        samples={result.samples}/>
                        );

                        let tab_titles = {};
                        tab_titles[result.id] = result.title;

                        this.setState({
                            tabContents: {...this.state.tabContents, ...tab_contents},
                            tabTitles: {...this.state.tabTitles, ...tab_titles},
                        });

                    }
                )
                .catch( error => {
                    console.log(error);
                })
        })
    }

    toggleSidebar = () => {
        this.setState({
            sidebarIsToggled: !this.state.sidebarIsToggled,
        });
    }

    handleKeyPress = (event) => {
        console.log(event.key + " pressed")
        if(event.key === "ArrowRight"){
            this.setState({
                sidebarIsToggled: false,
            })
        } else if(event.key === "ArrowLeft"){
            this.setState({
                sidebarIsToggled: true,
            })
        } else if(event.key === "ArrowDown"){
            this.setState({
                tableIsToggled: true,
            })
        } else if(event.key === "ArrowUp"){
            this.setState({
                tableIsToggled: false,
            })
        }
    }

    activateTab = (tabId) => {
        this.setState({
            activeTab: tabId,
        })
    }


    render() {
        return (
            <div>
                <Sidebar isToggled={this.state.sidebarIsToggled}
                         tabTitles={this.state.tabTitles}
                         activeTab={this.state.activeTab}
                         activateTab={this.activateTab}/>

                <div onClick={this.toggleSidebar}>
                    {
                        this.state.sidebarIsToggled ?
                            <FontAwesomeIcon icon={faAngleRight} className="angle-sidebar-toggler"/> :
                            <FontAwesomeIcon icon={faAngleLeft} className="angle-sidebar-toggler open"/>
                    }
                </div>

                <div tabIndex="0" onKeyDown={(event => this.handleKeyPress(event))}>
                    <div className={`window-box ${this.state.sidebarIsToggled ? "closed-sidebar" : "open-sidebar"}`}>
                        <div className="main-window">
                            <div className="ContestContent">
                                {
                                    this.state.tableIsToggled ?
                                    this.state.tabContents[this.state.activeTab] :
                                    <StandingsTable/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContestContent