import React, {Component} from "react";
import TabContent from "../TabContent/TabContent";
import Sidebar from "../Sidebar/Sidebar";
import StandingsTable from "../StandigsTable/StandingsTable";
import "./ContestContent.css";


class ContestContent extends Component {
    state = {
        activeTab: 0,
        sidebarIsToggled: true,
        tableIsToggled: true,
        tasks: [],
    }

    componentDidMount() {
        const apiUrl = "https://julia-api-server.herokuapp.com/api/";
        this.props.tasks.forEach( element => {
            fetch(apiUrl + "tasks/" + element.toString(), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        this.state.tasks.push(result)
                    }
                )
                .catch(
                    console.log
                )
        })
    }

    toggleSidebar = () => {
        this.setState({
            sidebarIsToggled: !this.state.sidebarIsToggled,
        })
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
        // let task0 = {
        //     id: 0,
        //     title: "Lorem Ipsum",
        //     content: "Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task.",
        //     contest: 0,
        //     tl: 0,
        //     ml: 0,
        //     samples: [
        //         ["123", "Metallica"],
        //         ["123", "Alcohollica"]
        //     ]
        // }
        // let task1 = {
        //     id: 1,
        //     title: "Metallica And Bread",
        //     content: "Metallica likes beer. They have great beards and hair. Slayer is cool too! Metallica likes beer. They have great beards and hair. Slayer is cool too! Metallica likes beer. They have great beards and hair. Slayer is cool too! Metallica likes beer. They have great beards and hair. Slayer is cool too!",
        //     contest: 1,
        //     tl: 666,
        //     ml: 666,
        //     samples: [
        //         ["666", "'tallica"],
        //         ["123", "Alcohollica"]
        //     ]
        // }


        // let tasks = this.state.tasks

        let tabs = {}
        let tabTitles = {}
        this.state.tasks.forEach(element => {
            tabs[element.id] = (
                <TabContent title={element.title}
                            key={element.id}
                            tl={element.tl}
                            ml={element.ml}
                            content={element.content}
                            samples={element.samples}/>
            )
            tabTitles[element.id] = element.title
        });

        return(
            <div>
                <Sidebar isToggled={this.state.sidebarIsToggled}
                         tabTitles={tabTitles}
                         activeTab={this.state.activeTab}
                         activateTab={this.activateTab}/>

                <div onClick={this.toggleSidebar}>
                    {this.state.sidebarIsToggled ? "> Open" : "< Toggle"} Sidebar
                </div>

                <div tabIndex="0" onKeyDown={(event => this.handleKeyPress(event))}>
                    <div className={`window-box ${this.state.sidebarIsToggled ? "closed-sidebar" : "open-sidebar"}`}>
                        <div className="main-window">
                            <div className="ContestContent">
                                { this.state.tableIsToggled? tabs[this.state.activeTab] : <StandingsTable/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContestContent