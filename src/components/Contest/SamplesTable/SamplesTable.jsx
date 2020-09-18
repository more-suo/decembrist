import React, {Component} from "react";

class SamplesTable extends Component {
    render() {
        const samples = this.props.samples
        let samples_rows = []
        for (let i = 0; i < samples[0].length; i++){
            samples_rows.push(
                <tr>
                    <td><code>{samples[0][i]}</code></td>
                    <td><code>{samples[1][i]}</code></td>
                </tr>
            )
        }
        console.log(samples, samples_rows)
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