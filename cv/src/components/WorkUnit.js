import React from "react";
import Input from "./Input";

class WorkUnit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, start, finish, company, title, details } = this.props.data;
        const { change, del } = this.props;
        return (
            <div id={id}>
                <div>Work Component:</div>
                <Input type="text" name="title" value={title} edit={change}/>
                <Input type="text" name="company" value={company} edit={change}/>
                <Input type="text" name="start" value={start} edit={change}/>
                <Input type="text" name="finish" value={finish} edit={change}/>
                <Input type="text" name="details" value={details} edit={change}/>
                <button onClick={del}>Delete</button>
            </div>
        )
    }
}

export default WorkUnit;