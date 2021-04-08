import React, {Component} from "react";
import "./StandingsTableRow.css";

class StandingsTableRow extends Component {
    format_attempt(attempts) {
        if (attempts === 0){
            return ''
        }
        let return_string = '';
        if (attempts > 0){
            return_string += '+';
        }else{
            return_string += '-';
        }
        if (Math.abs(attempts) === 1){
            return return_string;
        }
        return_string += attempts
        return attempts
    }

    format_time(seconds) {
        if (!seconds){
            return ''
        }
        return `${Math.floor(seconds / 60)}:${seconds % 60}`
    }

    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.nr}</td>
                    <td>{this.props.info.username}</td>
                    {this.props.info.attempts.map(
                        ([attempts, decision_time]) => {
                            return <td><p>{this.format_attempt(attempts)}</p> <p>{this.format_time(decision_time)}</p></td>
                        }
                    )}
                </tr>
            </React.Fragment>)
    }
}

export default StandingsTableRow