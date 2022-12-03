import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            id: uuidv4(),
            school: '',
            location: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
        this.updateData()
    }
    updateData() {
        const unit = {
            id: this.state.id,
            school: this.state.school,
            location: this.state.location,
        }
        console.log(this.state.data)
        this.setState({
            data: this.state.data.concat(unit)
        })
    }
    render() {
        const { school, location } = this.state;
        return (
            <div>
                <div>Ed Unit</div>
                <Input type="text" name="school" value={school} edit={this.handleChange}/>
                <Input type="text" name="location" value={location} edit={this.handleChange}/>
                <h3>{school}</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}

export default EdUnit;