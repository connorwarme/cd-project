import React from "react";
import { v4 as uuidv4 } from 'uuid';
import WorkUnit from "./WorkUnit";

class Career extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workList: this.props.data,
        }
        this.findUnit = this.findUnit.bind(this);
        this.createNewUnit = this.createNewUnit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteUnit = this.deleteUnit.bind(this);
    }
    findUnit(id) {
        const unit = this.state.workList.find(index => index.id === id);
        return this.state.workList.indexOf(unit);
    }
    createNewUnit() {
        const unit = {
            id: uuidv4(),
            title: '',
            company: '',
            start: '',
            finish: '',
            details: '',
        }
        this.setState({
            workList: this.state.workList.concat(unit),
        })
    }
    updateState(updatedList) {
        this.setState({
            workList: updatedList,
        })
        this.props.change(updatedList);
    }
    handleChange(e) {
        const id = e.target.parentElement.parentElement.id;
        const index = this.findUnit(id);
        const objCopy = {...this.state.workList[index]};
        objCopy[e.target.name] = e.target.value;
        const workListCopy = [...this.state.workList];
        workListCopy[index] = objCopy;
        this.updateState(workListCopy);
    }
    deleteUnit(e) {
        const id = e.target.parentElement.id;
        const updatedArray = this.state.workList.filter(work => work.id !== id);
        this.updateState(updatedArray);
    }
    render() {
        return (
            <div>
                <div>Work Experience</div>
                    {this.state.workList.map((unit) => {
                    return <WorkUnit key={unit.id} data={unit} edit={this.handleChange} del={this.deleteUnit}/>
                })}
                <button onClick={this.createNewUnit}>Create</button>
            </div>
        )
    }
}
export default Career;