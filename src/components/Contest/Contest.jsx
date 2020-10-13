import React, {Component} from "react";
import ContestContent from "../TaskContent/ContestContent";

class Contest extends Component {


    componentDidMount() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = "https://julia-api.azurewebsites.net/api/";
        fetch(proxyUrl + apiUrl + "/tasks", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                }
            )
            .catch(
                console.log
            )
    }

    render() {
        return (
            <ContestContent />
        )
    }
}

export default Contest
