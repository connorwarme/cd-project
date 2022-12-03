import React from "react";
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, school, location, degree, from, to, details } = this.props.data;
        const edit = this.props.edit;
        return (
            <div id={id}>
                <div>Education Unit</div>
                <Input type="text" name="school" value={school} edit={edit}/>
                <Input type="text" name="location" value={location} edit={edit}/>
                <Input type="text" name="degree" value={degree} edit={edit}/>
                <Input type="text" name="from" value={from} edit={edit}/>
                <Input type="text" name="to" value={to} edit={edit}/>
                <Input type="textarea" name="details" value={details} edit={edit}/>
            </div>
        )
    }
}

export default EdUnit;