import React from "react";
import { v4 as uuidv4 } from 'uuid';
import EdUnit from "./EdUnit";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: this.props.data,
        }
        this.createNewUnit = this.createNewUnit.bind(this);
        this.findUnit = this.findUnit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteUnit = this.deleteUnit.bind(this);
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
    }
    findUnit(id) {
        const unit = this.state.parent.find(index => index.id === id);
        return this.state.parent.indexOf(unit);
    }
    updateState(updatedArray) {
        this.setState({
            parent: updatedArray,
        })
        this.props.change(updatedArray);
    }
    handleChange(e) {
        const id = e.target.parentElement.parentElement.id;
        const index = this.findUnit(id);
        const objCopy = this.state.parent[index];
        objCopy[e.target.name] = e.target.value;
        const parentCopy = [...this.state.parent];
        parentCopy[index] = objCopy;
        this.updateState(parentCopy);
    }
    deleteUnit(e) {
        const id = e.target.parentElement.id;
        const updatedArray = this.state.parent.filter(work => work.id !== id);
        this.updateState(updatedArray);
    }
    render() {
        return (
            <div>
                <div>Education Component</div>
                {this.state.parent.map((unit) => {
                    return <EdUnit key={unit.id} data={unit} edit={this.handleChange} del={this.deleteUnit}/>
                })}
                <button onClick={this.createNewUnit}>Create</button>
            </div>
        )
    }
}

export default Education;