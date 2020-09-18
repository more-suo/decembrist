import React, {Component} from "react";

class LimitsTable extends Component {
    render() {
        return(
            <table className="limits-table">
                <tbody>
                <tr>
                    <td className="task-parameter">TL {this.props.tl} </td>
                    <td className="task-parameter">ML {this.props.ml} </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default LimitsTable