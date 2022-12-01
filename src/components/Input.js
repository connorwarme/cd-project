import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { type, name, value, edit} = this.props;
        return (
            <div>
                <input type={type} name={name} value={value} onChange={edit}></input>
            </div>
        )
    }
}

export default Input;