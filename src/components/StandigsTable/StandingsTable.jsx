import React, {Component} from "react";
import "./StandingsTable.css";


class StandingsTable extends Component {
    state = {
        taskTitles: [],
    }

    componentWillMount() {
        const titles = Object.keys(this.props.taskTitles).map(el => {
            return (
                <th scope="col"> {this.props.taskTitles[el]} </th>
            )
        });

        this.setState({
            taskTitles: titles,
        })
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