import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { school, location } = this.props.data;
        return (
            <div id={this.props.data.id}>
                <div>Education Unit</div>
                <h4>{this.props.data.id}</h4>
                <h4>{this.props.data.school}</h4>
                <h4>{this.props.data.location}</h4>
                <Input type="text" name="school" value={this.props.data.school} edit={this.props.edit}/>
                <Input type="text" name="location" value={this.props.data.location} edit={this.props.edit}/>
            </div>
        )
    }
}

export default EdUnit;