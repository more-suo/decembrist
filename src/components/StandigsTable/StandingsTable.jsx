import React, {Component} from "react";
import "./StandingsTable.css";

class StandingsTable extends Component {
    render() {
        return (
            <table className="StandingsTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Task I</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }
}

export default StandingsTable