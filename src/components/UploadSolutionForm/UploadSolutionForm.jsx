import React, {Component} from "react";
import "./UploadSolutionForm.css";

class UploadSolutionForm extends Component {
    state = {
        lang_value: "none",
        file_value: null,
    }

    file_input = React.createRef();
    handle_file_input(event){
        this.setState({
            file_value: this.file_input.current.files[0]
        })
    }

    render() {
        return (
            <div>
                <div className="send-solution-forms">
                    <form className="upload-solution-form">
                        <select className="select-language" id="select-language-ID" name="language">
                            <option value="" disabled selected hidden>Select Language</option>
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
                            <span>{this.state.file_value === null? "Choose File" : this.state.file_value.name}</span>
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