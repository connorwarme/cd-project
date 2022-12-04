import React from "react";
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, school, location, degree, from, to, details } = this.props.data;
        const { edit, del } = this.props;
        return (
            <div id={id}>
                <div>Education Unit</div>
                <Input type="text" id="school" value={school} holder="University" edit={edit}/>
                <Input type="text" id="location" value={location} holder="Location" edit={edit}/>
                <Input type="text" id="degree" value={degree} holder="Degree" edit={edit}/>
                <Input type="text" id="from" value={from} holder="Start Date" edit={edit}/>
                <Input type="text" id="to" value={to} holder="Graduation Date" edit={edit}/>
                <Input type="textarea" id="details" value={details} holder="Description" edit={edit}/>
                <button onClick={del}>Delete</button>
            </div>
        )
    }
}

export default EdUnit;