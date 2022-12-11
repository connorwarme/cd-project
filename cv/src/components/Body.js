import React from "react";
import Edit from "./Edit";
import Print from "./Print";
import demoContent from "./Demo";
import { v4 as uuidv4 } from "uuid";
import "../styles/Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Connor Warme",
      position: "Software Engineer",
      number: "1234567890",
      email: "connor.warme@gmail.com",
      location: "Phoenix, AZ",
      github: "",
      linkedin: "",
      bio: "",
      title: "Software Developer",
      company: "MadeItUp",
      start: "2019",
      finish: "2022",
      details: "I aint sure about this",
      workstack: [
        {
          id: uuidv4(),
          title: "Shooting Guard",
          company: "Los Angeles Lakers",
          location: "Los Angeles, CA",
          start: "1996",
          finish: "2016",
          details: "Career Statistics: Points - 25.0ppg (33,643), Rebounds - 5.2rpg (7,047), Assists - 4.7apg (6,306).",
        },
        {
          id: uuidv4(),
          title: "Basketball Player",
          company: "USA National Team",
          location: "Olympics",
          start: "2008",
          finish: "2012",
          details: "2x Olympic gold medal winner. Bryant had a 26-0 record as a member of the national team.",
        },
        {
          id: uuidv4(),
          title: "Owner / Writer",
          company: "Granity Studios",
          location: "Newport Beach, CA",
          start: "2013",
          finish: "2020",
          details: "Bryant wrote and narrated 'Dear Basketball', an animated short film based on his retirement poem. It won the Academy Award for Best Animated Short Film in 2017. In doing so, he became the first African-American to win the category and the first former professional athlete to win an Academy Award in any category.",
        },
      ],
      unistack: [],
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleUniChange = this.handleUniChange.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }
  handlePersonalChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  saveCard(e) {
    e.preventDefault();
    // don't really need a save button.. !!!
    console.log(this.state);
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
    inputKeys.forEach(key => {
      if (key === "workstack") {
        this.handleWorkChange(demoContent[key]);
      } else if (key === "unistack") {
        this.handleUniChange(demoContent[key]);
      } else {
        this.setState({
          [key]: demoContent[key],
        })
      }
    })
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
          <button className="generateDemo" onClick={this.handleDemo}>
            Generate Demo
          </button>
        </div>
        <Print data={this.state} />
      </div>
    );
  }
}

export default Body;
