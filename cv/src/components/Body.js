import React, {useState} from "react";
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
  })
  const [masterWorkList, setMasterWorkList] = useState([]);
  const [masterEdList, setMasterEdList] = useState([]);

  const handlePersonalChange = (e) => {
    setPersonal({...personal, [e.target.id]: e.target.value})
  }; 
  const saveCard = (e) => {
    e.preventDefault();
  }
  const handleWorkChange = (updatedArray)=> {
    setMasterWorkList(updatedArray);
  }
  const handleEdChange = (updatedArray) => {
    setMasterEdList(updatedArray);
  }
  // handleDemo() {
  //   const inputKeys = Object.keys(demoContent);
  //   console.log(inputKeys);
  //   inputKeys.forEach((key) => {
  //     if (key === "workstack") {
  //       this.handleWorkChange(demoContent[key]);
  //     } else if (key === "unistack") {
  //       this.handleUniChange(demoContent[key]);
  //     } else {
  //       this.setState({
  //         [key]: demoContent[key],
  //       });
  //     }
  //   });
  // }
  // handleClearForm() {
  //   const inputKeys = Object.keys(this.state);
  //   inputKeys.forEach((key) => {
  //     if (key === "workstack" || key === "unistack") {
  //       this.setState({
  //         [key]: [],
  //       });
  //     } else {
  //       this.setState({
  //         [key]: "",
  //       });
  //     }
  //   });
  // }
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
          />
          <div className="btnContainer">
            <button className="generateDemo">
              Generate Demo
            </button>
            <button className="clearForm" >
              Clear Form
            </button>
          </div>
        </div>
        <Print data={personal} work={masterWorkList} ed={masterEdList} />
      </div>
    );
  }

export default Body;
