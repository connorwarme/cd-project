import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input value={this.props.value} onChange={this.props.edit}></input>
            </div>
        )
    }
}

export default Input;