import React from "react";
import Input from "./Input";

class WorkUnit extends React.Component {
    constructor(props) {
        super(props)
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }
    hoverOn(e) {
        e.target.parentElement.nextElementSibling.style.backgroundColor = "lightblue";
    }
    hoverOff(e) {
        e.target.parentElement.nextElementSibling.style.backgroundColor = "white";
    }
    render() {
        const { id, start, finish, company, title, details } = this.props.data;
        const { edit, del, intel } = this.props;
        function headerText(input) {
            return (input === 0 ? "Work Experience" : "")
        }
        return (
            <div className="work-unit" id={id}>
                <div className="spacer"></div>
                <div className="header-unit">
                    <div className="sectionTitle">{headerText(intel)}</div>
                    <button onMouseOver={this.hoverOn} onMouseOut={this.hoverOff} onClick={del} title="Delete"></button>
                </div>
                <div className="inputContent">
                    <Input type="text" id="title" value={title} holder="Title" edit={edit}/>
                    <Input type="text" id="company" value={company} holder="Company" edit={edit}/>
                    <div className="dateContainer">
                        <Input type="text" id="start" value={start} holder="Start" edit={edit}/>
                        <Input type="text" id="finish" value={finish} holder="Finish" edit={edit}/>
                    </div>
                    <Input type="text" id="details" value={details} holder="Description" edit={edit}/>
                </div>

            </div>
        )
    }
}

export default WorkUnit;