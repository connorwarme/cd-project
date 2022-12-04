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
                <Input type="text" name="school" value={school} holder="University" edit={edit}/>
                <Input type="text" name="location" value={location} holder="Location" edit={edit}/>
                <Input type="text" name="degree" value={degree} holder="Degree" edit={edit}/>
                <Input type="text" name="from" value={from} holder="Start Date" edit={edit}/>
                <Input type="text" name="to" value={to} holder="Graduation Date" edit={edit}/>
                <Input type="textarea" name="details" value={details} holder="Description" edit={edit}/>
                <button onClick={del}>Delete</button>
            </div>
        )
    }
}

export default EdUnit;