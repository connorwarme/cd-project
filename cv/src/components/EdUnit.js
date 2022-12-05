import React from "react";
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, school, location, degree, from, to, details } = this.props.data;
        const { edit, del, intel } = this.props;
        function headerText(input) {
            return (input === 0 ? "Education" : "")
        }
        return (
            <div className="ed-unit" id={id}>
                <div className="spacer"></div>
                <div className="header-unit">
                    <div className="sectionTitle">{headerText(intel)}</div>
                    <button onClick={del}></button>
                </div>
                <Input type="text" id="school" value={school} holder="University" edit={edit}/>
                <Input type="text" id="location" value={location} holder="Location" edit={edit}/>
                <Input type="text" id="degree" value={degree} holder="Degree" edit={edit}/>
                <div className="dateContainer">
                    <Input type="text" id="from" value={from} holder="Start Date" edit={edit}/>
                    <Input type="text" id="to" value={to} holder="Graduation Date" edit={edit}/>
                </div>
                <Input type="text" id="details" value={details} holder="Description" edit={edit}/>
            </div>
        )
    }
}

export default EdUnit;