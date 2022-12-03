import React from "react";
import Input from "./Input";

class EdUnit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            school: '',
            location: '',

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
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