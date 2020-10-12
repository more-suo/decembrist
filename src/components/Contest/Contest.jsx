import React, {Component} from "react";
import ContestContent from "../TaskContent/ContestContent";
import API from "../../utils/API";

class Contest extends Component {

    async componentDidMount() {
        let Tasks = await API.get('/tasks/');
        Tasks = Tasks.data.results[0];
        console.log(Tasks);
    }

    render() {
        return (
            <ContestContent />
        )
    }
}

export default Contest
