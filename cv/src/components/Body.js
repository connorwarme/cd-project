import React from "react";
import Edit from "./Edit";
import Print from "./Print";
import demoContent from "./Demo";
import "../styles/Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      number: "",
      email: "",
      location: "",
      github: "",
      linkedin: "",
      bio: "",
      workstack: [],
      unistack: [],
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleUniChange = this.handleUniChange.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  handlePersonalChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  saveCard(e) {
    e.preventDefault();
  }
  handleWorkChange(updatedArray) {
    this.setState({
      workstack: updatedArray,
    });
  }
  handleUniChange(updatedArray) {
    this.setState({
      unistack: updatedArray,
    });
  }
  handleDemo() {
    const inputKeys = Object.keys(demoContent);
    console.log(inputKeys);
    inputKeys.forEach((key) => {
      if (key === "workstack") {
        this.handleWorkChange(demoContent[key]);
      } else if (key === "unistack") {
        this.handleUniChange(demoContent[key]);
      } else {
        this.setState({
          [key]: demoContent[key],
        });
      }
    });
  }
  handleClearForm() {
    const inputKeys = Object.keys(this.state);
    inputKeys.forEach((key) => {
      if (key === "workstack" || key === "unistack") {
        this.setState({
          [key]: [],
        });
      } else {
        this.setState({
          [key]: "",
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Edit
            data={this.state}
            save={this.saveCard}
            changeP={this.handlePersonalChange}
            changeU={this.handleUniChange}
            changeW={this.handleWorkChange}
          />
          <div className="btnContainer">
            <button className="generateDemo" onClick={this.handleDemo}>
              Generate Demo
            </button>
            <button className="clearForm" onClick={this.handleClearForm}>
              Clear Form
            </button>
          </div>
        </div>
        <Print data={this.state} />
      </div>
    );
  }
}

export default Body;
