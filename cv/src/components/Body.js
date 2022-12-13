import React, { useState } from "react";
import Edit from "./Edit";
import Print from "./Print";
import demoContent from "./Demo";
import "../styles/Body.css";

const Body = () => {
  const [personal, setPersonal] = useState({
    name: "",
    position: "",
    number: "",
    email: "",
    location: "",
    github: "",
    linkedin: "",
    bio: "",
  });
  const [masterWorkList, setMasterWorkList] = useState([]);
  const [masterEdList, setMasterEdList] = useState([]);
  const [showDemo, setShowDemo] = useState(false);
  const [clear, setClear] = useState(false);
  const handlePersonalChange = (e) => {
    setPersonal({ ...personal, [e.target.id]: e.target.value });
  };
  const saveCard = (e) => {
    e.preventDefault();
  };
  const handleWorkChange = (updatedArray) => {
    setMasterWorkList(updatedArray);
  };
  const handleEdChange = (updatedArray) => {
    setMasterEdList(updatedArray);
  };
  const handleDemo = () => {
    const inputKeys = Object.keys(demoContent);
    setPersonal(demoContent[inputKeys[0]]);
    handleWorkChange(demoContent[inputKeys[1]]);
    handleEdChange(demoContent[inputKeys[2]]);
    setShowDemo(true);
    setTimeout(() => {
      setShowDemo(false);
    }, 1000);
  };
  const handleClear = () => {
    setPersonal({
      name: "",
      position: "",
      number: "",
      email: "",
      location: "",
      github: "",
      linkedin: "",
      bio: "",
    });
    setMasterWorkList([]);
    setMasterEdList([]);
    setClear(true);
    setTimeout(() => {
      setClear(false);
    }, 1000);
  };
  return (
    <div className="container">
      <div>
        <Edit
          data={personal}
          work={masterWorkList}
          ed={masterEdList}
          save={saveCard}
          changeP={handlePersonalChange}
          changeE={handleEdChange}
          changeW={handleWorkChange}
          showD={showDemo}
          clear={clear}
        />
        <div className="btnContainer">
          <button className="generateDemo" onClick={handleDemo}>
            Generate Demo
          </button>
          <button className="clearForm" onClick={handleClear}>
            Clear Form
          </button>
        </div>
      </div>
      <Print data={personal} work={masterWorkList} ed={masterEdList} />
    </div>
  );
};

export default Body;
