import React, {Component} from "react";

class SamplesTable extends Component {
    render() {
        return(
            <table className="samples-table">
                <thead>
                    <tr>
                        <th scope="col">Input</th>
                        <th scope="col"> Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>123</code></td>
                        <td><code>321</code></td>
                    </tr>
                    <tr>
                        <td><code>123</code></td>
                        <td><code>321</code></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default SamplesTable