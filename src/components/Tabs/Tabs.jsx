import React, {Component} from "react";
import Tab from "../Tab/Tab";


class Tabs extends Component {
    state = {
        activeTab: null,
    }


    render() {
        let tabs = []
        this.props.tabsTitle.forEach(element => {
            tabs.push(<Tab title={element}/>)
        });

        return(
            <div className="Tabs">
                { tabs }
            </div>
        )
    }
}

export default Tabs