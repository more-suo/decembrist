import React, {Component} from "react";
import TabContent from "../TabContent/TabContent";
import Sidebar from "../Sidebar/Sidebar";
import "./ContestContent.css";


class ContestContent extends Component {
    state = {
        activeTab: 0,
        sidebarIsToggled: true,
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
        }
    }

    task0 = {
        id: 0,
        title: "Lorem Ipsum",
        content: "Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task. Something 'bout the task.",
        contest: 0,
        tl: 0,
        ml: 0,
        samples: [
            ["123", "Metallica"],
            ["123", "Alcohollica"]
        ]
    }
    task1 = {
        id: 1,
        title: "Metallica And Bread",
        content: "Metallica likes beer. They have great beards and hair. Slayer is cool too! Metallica likes beer. They have great beards and hair. Slayer is cool too! Metallica likes beer. They have great beards and hair. Slayer is cool too! Metallica likes beer. They have great beards and hair. Slayer is cool too!",
        contest: 1,
        tl: 666,
        ml: 666,
        samples: [
            ["666", "'tallica"],
            ["123", "Alcohollica"]
        ]
    }
    tasks = [this.task0, this.task1]
    tabs = []
    titles = []

    render() {
        this.tasks.forEach(element => {
            this.tabs.push(
                <TabContent title={element.title}
                            tl={element.tl}
                            ml={element.ml}
                            content={element.content}
                            samples={element.samples}
                />
            )

            this.titles.push(element.title)
        });

        return(
            <div>
                <Sidebar isToggled={this.state.sidebarIsToggled} tabTitles={this.titles}/>

                <div onClick={this.toggleSidebar}>
                    {this.state.sidebarIsToggled ? "> Open" : "< Toggle"} Sidebar
                </div>

                <div tabIndex="0" onKeyDown={(event => this.handleKeyPress(event))}>
                    <div className={`window-box ${this.state.sidebarIsToggled ? "closed-sidebar" : "open-sidebar"}`}>
                        <div className="main-window">
                            <div className="ContestContent">
                                { this.tabs[this.state.activeTab] }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContestContent