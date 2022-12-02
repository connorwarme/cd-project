import React from "react";
import Input from "./Input";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data.intel,
            id: this.props.data.id,
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
                <Input type="text" name="school" value={school} edit={this.handleChange}/>
                <h1>{this.state.id}</h1>
            </div>
        )
    }
}

export default Education;