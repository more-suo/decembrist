import React, {Component} from "react";
import "./LimitsTable.css";

class LimitsTable extends Component {
    render() {
        return(
            <table>
                <tbody>
                <tr>
                    <td className="task-parameter">TL {this.props.tl}s </td>
                    <td className="task-parameter">ML {this.props.ml}MB </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default LimitsTable