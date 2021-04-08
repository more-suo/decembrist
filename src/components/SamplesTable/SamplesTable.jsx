import React, {Component} from "react";
import "./SamplesTable.css";

class SamplesTable extends Component {
    render() {
        const samples = this.props.samples
        let samples_rows = []
        for (let i = 0; i < samples.length; i++){
            samples_rows.push(
                <tr key={i}>
                    <td><code>{samples[i][0]}</code></td>
                    <td><code>{samples[i][1]}</code></td>
                </tr>
            )
        }
        
        return(
            <table className="samples-table">
                <thead>
                    <tr>
                        <th scope="col">Input</th>
                        <th scope="col"> Output</th>
                    </tr>
                </thead>
                <tbody>
                    {samples_rows}
                </tbody>
            </table>
        )
    }
}

export default SamplesTable