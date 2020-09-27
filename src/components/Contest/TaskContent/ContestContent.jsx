import React, {Component} from "react";
import TabContent from "../../Tabs/TabContent/TabContent";
import "./ContestContent.css";

class ContestContent extends Component {
    state = {
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
        });

        return(
            <div className="ContestContent">
                { this.tabs[0] }
            </div>
        )
    }
}

export default ContestContent