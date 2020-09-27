import React, {Component} from "react";
import LimitsTable from "../../Contest/TaskContent/LimitsTable/LimitsTable";
import SamplesTable from "../../Contest/TaskContent/SamplesTable/SamplesTable";

class TabContent extends Component {
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
        return (
            <div>
                <h1 className="title">{this.state.title}</h1>
                <LimitsTable tl={this.state.tl} ml={this.state.ml}/>
                <div className="content">{this.state.content}</div>
                <SamplesTable samples={this.state.samples}/>
            </div>
        )
    }
}

export default TabContent