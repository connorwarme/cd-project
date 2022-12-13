import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import EdUnit from "./EdUnit";
import demoContent from "./Demo";
import "../styles/Education.css";

const Education = (props) => {
  const [edList, setEdList] = useState([]);
  const addToList = () => {
    setEdList([...edList, newUnit()]);
    props.change(edList);
  };
  const findId = (e) => {
    let id;
    if (e.target.id === "from" || e.target.id === "to") {
      id = e.target.parentElement.parentElement.parentElement.parentElement.id;
    } else {
      id = e.target.parentElement.parentElement.parentElement.id;
    }
    return id;
  };
  const findUnit = (id) => edList.findIndex((item) => item.id === id);

  const editObjInList = (e) => {
    const copyList = [...edList];
    const id = findId(e);
    const objIndex = findUnit(id);
    copyList[objIndex][e.target.id] = e.target.value;
    setEdList(copyList);
    props.change(edList);
  };
  const deleteFromList = (e) => {
    const id = e.target.parentElement.parentElement.id;
    const newList = edList.filter((index) => index.id !== id);
    setEdList(newList);
    props.change(newList);
  };
  const newUnit = () => {
    const unit = {
      id: uuidv4(),
      school: "",
      location: "",
      degree: "",
      from: "",
      to: "",
      details: "",
    };
    return unit;
  };
  const addTitle = () => {
    if (edList.length === 0) {
      return <div className="sectionTitleSolo">Education</div>;
    }
  };
  const loadDemo = () => {
    const inputKeys = Object.keys(demoContent);
    setEdList(demoContent[inputKeys[2]]);
  };
  useEffect(() => {
    if (props.show === true) {
      loadDemo();
    }
    if (props.clear === true) {
      setEdList([]);
    }
  }, [props.show, props.clear]);
  return (
    <div className="education-component">
      <div className="section-spacer"></div>
      {addTitle()}
      {edList.map((unit, index) => {
        return (
          <EdUnit
            key={unit.id}
            data={unit}
            edit={editObjInList}
            del={deleteFromList}
            intel={index}
          />
        );
      })}
      <button
        className="addBtn"
        onClick={() => {
          addToList(newUnit());
          console.log(edList);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Education;
