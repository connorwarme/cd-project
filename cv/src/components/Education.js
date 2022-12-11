import React from "react";
import { v4 as uuidv4 } from "uuid";
import EdUnit from "./EdUnit";
import "../styles/Education.css";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edList: this.props.data,
    };
    this.createNewUnit = this.createNewUnit.bind(this);
    this.findUnit = this.findUnit.bind(this);
    this.findId = this.findId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.addTitle = this.addTitle.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.edList) {
      return { edList: props.data }
    }
    return null;
  }
  createNewUnit() {
    const unit = {
      id: uuidv4(),
      school: "",
      location: "",
      degree: "",
      from: "",
      to: "",
      details: "",
    };
    this.setState({
      edList: this.state.edList.concat(unit),
    });
  }
  findUnit(id) {
    const unit = this.state.edList.find((index) => index.id === id);
    return this.state.edList.indexOf(unit);
  }
  updateState(updatedArray) {
    this.setState({
      edList: updatedArray,
    });
    this.props.change(updatedArray);
  }
  findId(e) {
    let id;
    if (e.target.id === "from" || e.target.id === "to") {
      id = e.target.parentElement.parentElement.parentElement.parentElement.id;
    } else {
      id = e.target.parentElement.parentElement.parentElement.id;
    }
    return id;
  }
  handleChange(e) {
    const id = this.findId(e);
    const index = this.findUnit(id);
    const objCopy = { ...this.state.edList[index] };
    objCopy[e.target.id] = e.target.value;
    const edListCopy = [...this.state.edList];
    edListCopy[index] = objCopy;
    this.updateState(edListCopy);
  }
  deleteUnit(e) {
    const id = e.target.parentElement.parentElement.id;
    const updatedArray = this.state.edList.filter((work) => work.id !== id);
    this.updateState(updatedArray);
  }
  addTitle() {
    if (this.state.edList.length === 0) {
      return <div className="sectionTitleSolo">Education</div>;
    }
  }
  componentDidMount() {
    window.addEventListener("load", this.createNewUnit);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.createNewUnit);
  }
  render() {
    return (
      <div className="education-component">
        <div className="section-spacer"></div>
        {this.addTitle()}
        {this.state.edList.map((unit, index) => {
          return (
            <EdUnit
              key={unit.id}
              data={unit}
              edit={this.handleChange}
              del={this.deleteUnit}
              intel={index}
            />
          );
        })}
        <button className="addBtn" onClick={this.createNewUnit}>
          Add
        </button>
      </div>
    );
  }
}

export default Education;
