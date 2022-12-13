import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import WorkUnit from "./WorkUnit";
import demoContent from "./Demo";
import "../styles/Work.css";

// just started into the process of switching this to fn w/ hooks
// need to sort out how to do it better than my attempt w/ classes

const Career = (props) => {
  const [workList, setWorkList] = useState([]);
  const addToList = () => {
    setWorkList([...workList, newUnit()]);
    props.change(workList);
    console.log("fire");
  };
  const findId = (e) => {
    let id;
    if (e.target.id === "start" || e.target.id === "finish") {
      id = e.target.parentElement.parentElement.parentElement.parentElement.id;
    } else {
      id = e.target.parentElement.parentElement.parentElement.id;
    }
    return id;
  };
  const findUnit = (id) => workList.findIndex((item) => item.id === id);

  const editObjInList = (e) => {
    const copyList = [...workList];
    const id = findId(e);
    const objIndex = findUnit(id);
    copyList[objIndex][e.target.id] = e.target.value;
    setWorkList(copyList);
    props.change(workList);
  };
  const deleteFromList = (e) => {
    const id = e.target.parentElement.parentElement.id;
    const newList = workList.filter((index) => index.id !== id);
    setWorkList(newList);
    props.change(newList);
  };
  const newUnit = () => {
    const unit = {
      id: uuidv4(),
      title: "",
      company: "",
      location: "",
      start: "",
      finish: "",
      details: "",
    };
    return unit;
  };
  const addTitle = () => {
    if (workList.length === 0) {
      return <div className="sectionTitleSolo">Work Experience</div>;
    }
  };
  const loadDemo = () => {
    const inputKeys = Object.keys(demoContent);
    setWorkList(demoContent[inputKeys[1]]);
  };
  useEffect(() => {
    if (props.show === true) {
      loadDemo();
    }
    if (props.clear === true) {
      setWorkList([]);
    }
  }, [props.show, props.clear]);

  return (
    <div className="work-component">
      <div className="section-spacer"></div>
      {addTitle()}
      {workList.map((unit, index) => {
        return (
          <WorkUnit
            key={unit.id}
            data={unit}
            edit={editObjInList}
            del={deleteFromList}
            intel={index}
          />
        );
      })}
      <button className="addBtn" onClick={addToList}>
        Add
      </button>
    </div>
  );
};

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
