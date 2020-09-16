import React, {Component} from "react";

class TaskContent extends Component {
    state = {
        id: 0,
        title: "Lorem Ipsum",
        content: "Something 'bout the task",
        contest: 0,
        tl: 0,
        ml: 0,
        samples: [
            "123",
            "123"
        ]
    }

    render() {
        return (
            <div>
                <h1 className="title">{this.state.title}</h1>

                <table className="limits-table">
                    <tbody>
                        <tr>
                            <td className="task-parameter">TL {this.state.tl} </td>
                            <td className="task-parameter">ML {this.state.ml} </td>
                        </tr>
                    </tbody>
                </table>

                <div className="content">
                    {this.state.content}
                </div>

                <table className="io-table">
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



                                </div>
        )
    }
}

export default TaskContent