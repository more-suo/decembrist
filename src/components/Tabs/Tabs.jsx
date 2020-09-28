import React, {Component} from "react";
import Tab from "../Tab/Tab";


class Tabs extends Component {
    tabs = []

    render() {

        this.props.tabsTitle.forEach(element => {
            this.tabs.push(<Tab title={element}/>)
        });

        return(
            <div className="Tabs">
                {this.tabs}
            </div>
        )
    }
}

export default Tabs