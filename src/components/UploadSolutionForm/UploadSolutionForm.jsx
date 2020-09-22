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
    handle_file_input = () => {
        this.setState({
            file_value: this.file_input.current.files[0]
        })
    }

    render() {
        const file_input_text = this.state.file_value === undefined ? "Select file" : this.state.file_value.name;
        return (
            <div>
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
                                   onChange={(e) => this.handle_file_input(e)}/>
                            <span>{file_input_text}</span>
                        </label>

                        <button className="send-solution-button"
                                type="submit"
                                name="send-solution-ID"
                                value="Send_Solution"
                                id="send-solution-ID">
                            Send Solution
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadSolutionForm