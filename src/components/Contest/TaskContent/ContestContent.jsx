import React, {Component} from "react";
import TabContent from "../../Tabs/TabContent/TabContent";
import "./ContestContent.css";
import LimitsTable from "./LimitsTable/LimitsTable";

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

    render() {
        return(
            <div className="ContestContent">
                <TabContent title={this.state.title}
                            tl={this.state.tl}
                            ml={this.state.ml}
                            content={this.state.content}
                            samples={this.state.samples}
                />

            </div>
        )
    }
}

export default ContestContent