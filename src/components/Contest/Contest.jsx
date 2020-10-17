import React, {Component} from "react";
import ContestContent from "../TaskContent/ContestContent";

class Contest extends Component {
    state = {

    }

    componentDidMount() {
        const apiUrl = "https://julia-api-server.herokuapp.com/api/";
        fetch(apiUrl + "contests", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(result.results[0]);
                }
            )
            .catch(
                console.log
            )
    }

    render() {
        return (
            <ContestContent tasks={this.state.tasks}/>
        )
    }
}

export default Contest
