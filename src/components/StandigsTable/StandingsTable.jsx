import React, {Component} from "react";
import "./StandingsTable.css";


class StandingsTable extends Component {
    state = {
        taskTitles: [],
        rows: [],
        loading: true,
        username_counter: 0,
        username_counter_loading: 0,
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

        let rows = [];
        // TODO: Перепишите это, пожалуйста, я устал
        // TODO: Contest id !!!
        this.props.api.listContestResults(1).then(
            response => {
                this.setState({
                    username_counter: response.data.results.length,
                });
                response.data.results.map((result, i) => {
                    rows.push(<th scope="col"> #{i} </th>);
                    this.props.api.describeUser(result.user).then(
                        response => {
                            console.log(response.data);
                            rows[i*titles.length+1] = <th scope="col"> {response.data.username} </th>;
                        }

                    ).then(
                        response => {
                            result.attempts.map((e, i) => [e, result.decision_time[i]]).map(
                                (attempts, decision_time) => { rows.push(<th scope="col"> {attempts} </th>) }
                            )
                        }
                    ).then(
                        response => {
                            console.log(this.state.username_counter_loading)
                            this.setState({
                                username_counter_loading: this.state.username_counter_loading++,
                            })
                            console.log(123)
                        }
                    )
                })
            }
        ).then(
            response => {
                this.setState({
                    rows: rows,
                    loading: false,
                })
            }
        )
    }

    render() {
        return (
            <div>
                {(this.state.loading && (this.state.username_counter !== this.state.username_counter_loading))
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
                         { this.state.rows }
                         </tbody>
                     </table>)
                }
            </div>
        )
    }
}

export default StandingsTable