import React, {Component} from "react";
import "./StandingsTable.css";
import TabContent from "../TabContent/TabContent";

class StandingsTable extends Component {
    state = {
        tabTitles: this.props.tabTitles,
        taskTitles: {},
    }

    componentWillMount() {
        this.state.taskTitles = Object.keys(this.props.tabTitles).map(el => {
            return <th scope="col"> {this.props.tabTitles[el]} </th>
        });
    }

    render() {
        return (
            <table className="StandingsTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        { this.state.taskTitles }
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }
}

export default StandingsTable