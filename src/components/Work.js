import React from "react";
import Input from "./Input";

class Work extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { start, finish, company, title, details } = this.props.value;
        const { change } = this.props;
        return (
            <div>
                <div>Work Component</div>
                <Input type="text" name="title" value={title} edit={change}/>
                <Input type="text" name="company" value={company} edit={change}/>
                <Input type="text" name="start" value={start} edit={change}/>
                <Input type="text" name="finish" value={finish} edit={change}/>
                <Input type="text" name="details" value={details} edit={change}/>
                <div>{start}</div>
                <div>{finish}</div>
                <div>{company}</div>
                <div>{title}</div>
                <div>{details}</div>
            </div>
        )
    }
}

export default Work;