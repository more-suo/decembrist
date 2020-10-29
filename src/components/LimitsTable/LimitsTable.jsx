import React, {Component} from "react";
import "./LimitsTable.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMemory, faHourglass} from "@fortawesome/free-solid-svg-icons";

class LimitsTable extends Component {
    render() {
        return(
            <table>
                <tbody>
                <tr>
                    <td id="tl" className="task-parameter">
                        <FontAwesomeIcon icon={faHourglass}/> {this.props.tl}s
                    </td>
                    <td id="ml" className="task-parameter">
                        <FontAwesomeIcon icon={faMemory}/> {this.props.ml / Math.pow(2, 20)} MB
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default LimitsTable