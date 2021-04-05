import React, {Component} from "react";
import "./StandingsTable.css";
import StandingsTableRow from "../StandigsTableRow/StandingsTableRow";


class StandingsTable extends Component {
    state = {
        taskTitles: [],
        results_tree: {},
        username_counter: 0,
    }

    componentWillMount() {
        const titles = Object.keys(this.props.taskTitles).map(el => {
            return (
                <th scope="col"> {this.props.taskTitles[el]} </th>
            )
        });
        this.setState({
            taskTitles: titles,
        });

        let bst = require('./bst.js');
        // TODO: Contest id !!!
        // TODO: Add pagination
        this.props.api.listContestResults(1).then(
            response => {
                this.setState({
                    username_counter: response.data.results.length,
                    results_tree: new bst.BinarySearchTree(),
                });

                response.data.results.map((result, i) => {
                    let payload = {};
                    this.props.api.describeUser(result.user).then(
                        response => {
                            payload.username = response.data.username
                        }
                    ).then(
                        response => {
                            payload.attempts = result.attempts.map((e, i) => [e, result.decision_time[i]])
                        }
                    ).then(
                        response => {
                            let scores = this.calculateScores(result.attempts, result.decision_time);
                            this.state.results_tree.insert(scores, payload);
                            this.setState({
                                results_tree: this.state.results_tree,
                            })
                        }
                    )
                })
            }
        )
    }

    calculateScores(attempts, decision_time){
        return 7200*attempts.reduce((a, b) => a + b, 0) + attempts.reduce((a, b) => a + b, 0)
    }

    render() {
        return (
            <div>
                {(this.state.username_counter !== this.state.results_tree.length)
                    ? <p>Loading...</p>
                    : (<table className="StandingsTable">
                         <thead>
                         <tr>
                             <th scope="col">#</th>
                             <th scope="col">Username</th>
                             { this.state.taskTitles }
                         </tr>
                         </thead>
                         <tbody>
                         {this.state.results_tree.list().map(
                             (info, i) => {
                                 return <StandingsTableRow nr={i+1} info={info}/>
                             }
                         )}
                         </tbody>
                       </table>)
                }
            </div>
        )
    }
}

export default StandingsTable