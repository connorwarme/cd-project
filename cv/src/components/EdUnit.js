import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            school: this.props.data.school,
            location: this.props.data.location,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        const { school, location } = this.state
        return (
            <div>
                <div>Ed Unit</div>
                <Input type="text" name="school" value={this.props.data.school} edit={this.props.edit}/>
                <Input type="text" name="location" value={this.props.data.location} edit={this.props.edit}/>
                <h3>{school}</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}

export default EdUnit;