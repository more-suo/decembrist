import React, {Component} from "react";
import Tab from "../Tab/Tab";


class Tabs extends Component {
    state = {
        activeTab: null,
    }

    // getActiveTab = () => {
    //
    // }

    render() {
        const tabsTitle = this.props.tabsTitle;

        let tabs = Object.keys(tabsTitle).map((key) => (
            <Tab key={key} title={tabsTitle[key]}/>
        ))

        return(
            <div className="Tabs">
                { tabs }
            </div>
        )
    }
}

export default Tabs