import React from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';
import EdUnit from "./EdUnit";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: this.props.data,
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
        const id = e.target.parentElement.parentElement.id;
        const index = this.findUnit(id);
        const objCopy = this.state.parent[index];
        objCopy[e.target.name] = e.target.value;
        const parentCopy = this.state.parent;
        parentCopy[index] = objCopy;
        this.setState({
            parent: parentCopy,
        })
        this.props.change(parentCopy);
    }
    createNewUnit() {
        const unit = {
            id: uuidv4(),
            school: '',
            location: '',
            degree: '',
            from: '',
            to: '',
            details: '',

        }
        this.setState({
            parent: this.state.parent.concat(unit),
        })
        // add unit to uniStack
        // create display unit
    }
    render() {
        const { school, location } = this.state;
        return (
            <div>
                <div>Education Component</div>
                {this.state.parent.map((unit) => {
                    return <EdUnit key={unit.id} data={unit} edit={this.handleChange}/>
                })}
                <button onClick={this.createNewUnit}>Create</button>
            </div>
        )
    }
}

export default Education;