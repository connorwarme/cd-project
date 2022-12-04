import React from "react";
import Input from "./Input";

class WorkUnit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, start, finish, company, title, details } = this.props.data;
        const { edit, del } = this.props;
        return (
            <div id={id}>
                <div>Work Component:</div>
                <Input type="text" name="title" value={title} edit={edit}/>
                <Input type="text" name="company" value={company} edit={edit}/>
                <Input type="text" name="start" value={start} edit={edit}/>
                <Input type="text" name="finish" value={finish} edit={edit}/>
                <Input type="textarea" name="details" value={details} edit={edit}/>
                <button onClick={del}>Delete</button>
            </div>
        )
    }
}

export default WorkUnit;