import React from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';
import EdUnit from "./EdUnit";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: this.props.data,
            school: '',
            location: '',
        }
        this.findUnit = this.findUnit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createNewUnit = this.createNewUnit.bind(this);
    }
    findUnit(id) {
        const unit = this.state.parent.find(index => index.id === id);
        return this.state.parent.indexOf(unit);
    }
    handleChange(e) {
        console.log(this)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    // const index = this.findUnit()
    // const obj = this.state.parent[index];
    // obj[e.target.name] = e.target.value;
    // const newParent = this.state.parent;
    // newParent[index] = obj;
    createNewUnit() {
        const unit = {
            id: uuidv4(),
            school: '',
            location: ''
        }
        this.setState({
            parent: this.state.parent.concat(unit),
        })
        console.log(this.state.parent);
        // add unit to uniStack
        // create display unit
    }
    render() {
        const { school, location } = this.state;
        return (
            <div>
                {this.state.parent.map((unit) => {
                    return <EdUnit key={unit.id} data={unit} edit={this.handleChange}/>
                })}
                {/* <Input type="text" name="school" value={school} edit={this.handleChange}/> */}
                <button onClick={this.createNewUnit}>Create</button>
            </div>
        )
    }
}

export default Education;