import React, {Component} from "react";
import ContestContent from "../TaskContent/ContestContent";


class Contest extends Component {

    componentDidMount() {
        fetch("https://julia-api.azurewebsites.net/api/tasks")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({

                    })
                }
            )
    }

    render() {
        return (
            <ContestContent />
        )
    }
}

export default Contest
