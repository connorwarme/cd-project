import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import WorkUnit from "./WorkUnit";
import "../styles/Work.css";

// just started into the process of switching this to fn w/ hooks
// need to sort out how to do it better than my attempt w/ classes

const Career = (props) => {
  const [workList, setWorkList] = useState([]);
  const addToList = (object) => {
    setWorkList([...workList, object]);
    props.change(workList);
  }
  const findId = (e) => {
    let id;
    if (e.target.id === "start" || e.target.id === "finish") {
      id = e.target.parentElement.parentElement.parentElement.parentElement.id;
    } else {
      id = e.target.parentElement.parentElement.parentElement.id;
    }
    return id;
  } 
  const findUnit = (id) => workList.findIndex(item => item.id === id);

  const editObjInList = (e) => {
    const copyList = [...workList];
    const id = findId(e);
    const objIndex = findUnit(id);
    copyList[objIndex][e.target.id] = e.target.value;
    setWorkList(copyList);
    props.change(workList);
  }
  const deleteFromList = (e) => {
    const id = e.target.parentElement.parentElement.id;
    const newList = workList.filter(index => index.id !== id);
    console.log(newList);
    setWorkList(newList);
    props.change(newList);
  }
  const newUnit = () => {
    const unit = {
      id: uuidv4(),
      title: '',
      company: '',
      location: '',
      start: '',
      finish: '',
      details: '',
    }
    return unit;
  }
  const addTitle = () => {
    if (workList.length === 0) {
      return <div className="sectionTitleSolo">Work Experience</div>;
    }
  }
    // this.state = {
    //   workList: this.props.data,
    // };
    // this.findUnit = this.findUnit.bind(this);
    // this.createNewUnit = this.createNewUnit.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.findId = this.findId.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.deleteUnit = this.deleteUnit.bind(this);
    // this.addTitle = this.addTitle.bind(this);

  // static getDerivedStateFromProps(props, state) {
  //   if (props.data !== state.workList) {
  //     return { workList: props.data };
  //   }
  //   return null;
  // }

  //   this.setState({
  //     workList: this.state.workList.concat(unit),
  //   });
  // }
  // updateState(updatedList) {
  //   this.setState({
  //     workList: updatedList,
  //   });
  //   this.props.change(updatedList);
  // } 
  // handleChange(e) {
  //   const id = this.findId(e);
  //   const index = this.findUnit(id);
  //   const objCopy = { ...this.state.workList[index] };
  //   objCopy[e.target.id] = e.target.value;
  //   const workListCopy = [...this.state.workList];
  //   workListCopy[index] = objCopy;
  //   this.updateState(workListCopy);
  // }
  // deleteUnit(e) {
  //   const id = e.target.parentElement.parentElement.id;
  //   console.log(id);
  //   const updatedArray = this.state.workList.filter((work) => work.id !== id);
  //   console.log(updatedArray);
  //   this.updateState(updatedArray);
  //   console.log(this.props.data);
  // }
  // addTitle() {
  //   if (this.state.workList.length === 0) {
  //     return <div className="sectionTitleSolo">Work Experience</div>;
  //   }
  // }
  // componentDidMount() {
  //   window.addEventListener("load", this.createNewUnit);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("load", this.createNewUnit);
  // }
  return (
    <div className="work-component">
      <div className="section-spacer"></div>
      {addTitle()}
        {workList.map((unit, index) => {
          return (
            <WorkUnit key={unit.id} data={unit} edit={editObjInList} del={deleteFromList} intel={index}/>
          )
        })}
      <button className="addBtn" onClick={() => addToList(newUnit())}>
        Add
      </button>
    </div>
  );
}

// {workList.map((unit, index) => {
//   return (
//     <WorkUnit
//       key={unit.id}
//       data={unit}
//       edit={this.handleChange}
//       del={this.deleteUnit}
//       intel={index}
//     />
//   );
// })}
// const unit = () => {
//   const [unit, setUnit] = useState({});
//   const [key, setKey] = useState(uuidv4());
//   const [title, setTitle] = useState("");
// }

export default Career;
