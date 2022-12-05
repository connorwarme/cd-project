import React from "react";
import { v4 as uuidv4 } from 'uuid';
import EdUnit from "./EdUnit";
import "../styles/Education.css";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edList: this.props.data,
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
            edList: this.state.edList.concat(unit),
        })
    }
    findUnit(id) {
        const unit = this.state.edList.find(index => index.id === id);
        return this.state.edList.indexOf(unit);
    }
    updateState(updatedArray) {
        this.setState({
            edList: updatedArray,
        })
        this.props.change(updatedArray);
    }
    handleChange(e) {
        const id = e.target.parentElement.parentElement.id;
        const index = this.findUnit(id);
        const objCopy = {...this.state.edList[index]};
        objCopy[e.target.id] = e.target.value;
        const edListCopy = [...this.state.edList];
        edListCopy[index] = objCopy;
        this.updateState(edListCopy);
    }
    deleteUnit(e) {
        const id = e.target.parentElement.id;
        const updatedArray = this.state.edList.filter(work => work.id !== id);
        this.updateState(updatedArray);
    }
    render() {
        return (
            <div className="education-component">
                <div className="section-spacer"></div>
                <div className="education-title">Education</div>
                {this.state.edList.map((unit, index) => {
                    return <EdUnit key={unit.id} data={unit} edit={this.handleChange} del={this.deleteUnit} intel={index}/>
                })}
                <button onClick={this.createNewUnit}>Create</button>
            </div>
        )
    }
}

export default Education;