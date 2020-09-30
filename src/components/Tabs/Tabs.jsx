import React, {Component} from "react";
import Tab from "../Tab/Tab";


class Tabs extends Component {
    render() {
        const tabsTitle = this.props.tabsTitle;

        console.log(tabsTitle)
        console.log(Object.keys(tabsTitle).map(element => Number(element)));

        let tabs = Object.keys(tabsTitle).map((key) => (
            <Tab key={key}
                 title={tabsTitle[key]}
                 active={this.props.activeTab===Number(key)}/>
        ))

        return(
            <div className="Tabs">
                { tabs }
            </div>
        )
    }
}

export default Tabs