import React, {Component} from "react";
import "./UploadSolutionForm.css";

class UploadSolutionForm extends Component {
    state = {
        lang_value: undefined,
        file_value: undefined,
    }

    handle_language_select = (e) => {
        this.setState({
            lang_value: e.target.value,
        })
    }

    file_input = React.createRef();
    handle_file_input = (e) => {
        this.setState({
            file_value: e.target.files[0]
        })
    }

    sendSolution = () => {
        let formData = new FormData();
        formData.append('task', this.props.task_id)
        formData.append('code', this.state.file_value)
        formData.append('lang', this.state.lang_value)
        this.props.api.createSolution(formData).then(
            (response) => {
                switch (response.status){
                    case 201:
                        console.log(response.data);
                        break;
                    case 400:
                        break;
                    case 404:
                        break;
                    default:
                }
            }
        )
    }

    render() {
        const file_input_text = this.state.file_value === undefined ? "Select file" : this.state.file_value.name;
        return (
            <div className="UploadSolutionForm">
                <div className="send-solution-forms">
                    <form className="upload-solution-form">
                        <select className="select-language" value={this.state.lang_value} onChange={this.handle_language_select}>
                            <option defaultValue={"DEFAULT"} hidden>Select Language</option>
                            <option value="c">C</option>
                            <option value="cpp11">C++</option>
                            <option value="java">Java</option>
                            <option value="nasm">NASM</option>
                            <option value="pabc">PascalABC</option>
                            <option value="php">PHP</option>
                            <option value="python2">Python 2</option>
                            <option value="python3">Python 3</option>
                        </select>

                        <label className="upload-solution-label">
                            <input className="upload-solution"
                                   type="file"
                                   id="upload-solution-ID"
                                   ref={this.file_input}
                                   onChange={this.handle_file_input}/>
                            <span>{file_input_text}</span>
                        </label>

                        <button className="send-solution-button"
                                type="button"
                                name="send-solution-ID"
                                value="Send_Solution"
                                id="send-solution-ID"
                                onClick={this.sendSolution}>
                            Send Solution
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadSolutionForm