import React, {Component} from "react";
import Tab from "../Tab/Tab";


class Tabs extends Component {
    state = {
        activeTab: null,
    }

    render() {
        const tabsTitle = this.props.tabsTitle;

        let tabs = Object.keys(tabsTitle).map((key) => (
            <Tab classkey={key}
                 title={tabsTitle[key]}
                 activeTab={this.props.activeTab}/>
        ))

        return(
            <div className="Tabs">
                { tabs }
            </div>
        )
    }
}

export default Tabs