import React, {Component} from "react";
import ContestContent from "../TaskContent/ContestContent";

class Contest extends Component {
    state = {
        contest: null,
    }

    componentWillMount() {
        this.props.api.listContests().then(
            (response) => {
                this.setState({
                    contest: response.data.results[0]
                });  // TODO: What if there are no contests?
            }
        );
    }

    componentWillUnmount() {
        if (this.props.api.source){
            this.props.api.source.cancel("Landing Component got unmounted");
        }
    }

    render() {
        return this.state.contest ? <ContestContent api={this.props.api} contest={this.state.contest}/> : null
    }
}

export default Contest
