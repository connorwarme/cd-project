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
        this.handleChange = this.handleChange.bind(this);
        this.createNewUnit = this.createNewUnit.bind(this);
    }
    findUnit(id) {
        const unit = this.state.workList.find(index => index.id === id);
        return this.state.workList.indexOf(unit);
    }
    handleChange(e) {
        const id = e.target.parentElement.parentElement.id;
        const index = this.findUnit(id);
        const objCopy = this.state.workList[index];
        objCopy[e.target.name] = e.target.value;
        const workListCopy = this.state.workList;
        workListCopy[index] = objCopy;
        this.setState({
            workList: workListCopy,
        })
        this.props.change(workListCopy);
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
            workList: this.state.workList.concat(unit),
        })
    }
    render() {
        return (
            <div></div>
        )
    }
}
export default Career;