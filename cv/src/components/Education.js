import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data.intel,
            id: this.props.data.id,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <h1>{this.state.id}</h1>
            </div>
        )
    }
}

export default Education;