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
            <div className="work-unit" id={id}>
                <div className="spacer"></div>
                <Input type="text" id="title" value={title} holder="Title" edit={edit}/>
                <Input type="text" id="company" value={company} holder="Company" edit={edit}/>
                <div className="dateContainer">
                    <Input type="text" id="start" value={start} holder="Start" edit={edit}/>
                    <Input type="text" id="finish" value={finish} holder="Finish" edit={edit}/>
                </div>
                <Input type="textarea" id="details" value={details} holder="Description" edit={edit}/>
                <div className="delete-unit">
                    <button onClick={del}>Delete</button>
                </div>
            </div>
        )
    }
}

export default WorkUnit;