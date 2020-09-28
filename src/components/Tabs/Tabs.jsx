import React, {Component} from "react";
import Tab from "../Tab/Tab";

class Tabs extends Component {
    state = {

    }

    render() {
        return(
            <div className="Tabs">
                <Tab active={true}/>
                <Tab/>
            </div>
        )
    }
}

export default Tabs