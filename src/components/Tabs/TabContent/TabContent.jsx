import React, {Component} from "react";
import LimitsTable from "../../Contest/TaskContent/LimitsTable/LimitsTable";
import SamplesTable from "../../Contest/TaskContent/SamplesTable/SamplesTable";

class TabContent extends Component {
    render() {
        return (
            <div>
                <h1 className="title">{this.props.title}</h1>
                <LimitsTable tl={this.props.tl} ml={this.props.ml}/>
                <div className="content">{this.props.content}</div>
                <SamplesTable samples={this.props.samples}/>
            </div>
        )
    }
}

export default TabContent