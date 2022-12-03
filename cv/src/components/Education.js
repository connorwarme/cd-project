import React from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';
import EdUnit from "./EdUnit";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: this.props.data,
            id: uuidv4(),
            school: '',
            location: '',
        }
        this.updateValue = this.updateValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    updateValue() {
        this.setState({
            data: {
                school: this.state.school,
                location: this.state.location,
            }
        })
        console.log(this.state.data)
    }
    handleChange(e) {
        this.setState({
            data: {
                [e.target.name]: e.target.value,
            }
        })
        this.setState({
            [e.target.name]: e.target.value,
        })
        this.updateValue();
    }
    render() {
        const { school, location } = this.state;
        return (
            <div>
                {/* <Input type="text" name="school" value={school} edit={this.handleChange}/> */}
                <h1>{this.state.id}</h1>
                <EdUnit />
            </div>
        )
    }
}

export default Education;