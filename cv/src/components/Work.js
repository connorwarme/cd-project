import React from "react";
import { v4 as uuidv4 } from 'uuid';
import WorkUnit from "./WorkUnit";
import "../styles/Work.css";

class Career extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workList: this.props.data,
        }
        this.findUnit = this.findUnit.bind(this);
        this.createNewUnit = this.createNewUnit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.findId = this.findId.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteUnit = this.deleteUnit.bind(this);
        this.addTitle = this.addTitle.bind(this);
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
    findId(e) {
        let id;
        if (e.target.id === "start" || e.target.id === "finish") {
            id = e.target.parentElement.parentElement.parentElement.parentElement.id;
        } else {
            id = e.target.parentElement.parentElement.parentElement.id;
        }
        return id;
    }
    handleChange(e) {
        const id = this.findId(e);
        const index = this.findUnit(id);
        const objCopy = {...this.state.workList[index]};
        objCopy[e.target.id] = e.target.value;
        const workListCopy = [...this.state.workList];
        workListCopy[index] = objCopy;
        this.updateState(workListCopy);
    }
    deleteUnit(e) {
        const id = e.target.parentElement.parentElement.id;
        console.log(id);
        const updatedArray = this.state.workList.filter(work => work.id !== id);
        console.log(updatedArray);
        this.updateState(updatedArray);
    }
    addTitle() {
        if (this.state.workList.length === 0) {
            return <div className="sectionTitleSolo">Work Experience</div>
        }
    }
    componentDidMount() {
        window.addEventListener('load', this.createNewUnit);
     }
    
    componentWillUnmount() { 
       window.removeEventListener('load', this.createNewUnit)  
     }
    render() {
        return (
            <div className="work-component">
                <div className="section-spacer"></div>
                    {this.addTitle()}
                    {this.state.workList.map((unit, index) => {
                    return <WorkUnit key={unit.id} data={unit} edit={this.handleChange} del={this.deleteUnit} intel={index}/>
                })}
                <button className="addBtn" onClick={this.createNewUnit}>Add</button>
            </div>
        )
    }
}
export default Career;