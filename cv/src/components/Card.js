import React from "react";
import Input from "./Input";
import Personal from "./Personal";
import Work from "./Work";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Connor",
      position: "Junior Developer",
      number: "1234567890",
      email: "connor.warme@gmail.com",
      photo: "",
      edit: false,
    };
    this.editCard = this.editCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }
  editCard() {
    this.setState({
      edit: true,
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  saveCard(e) {
    e.preventDefault();
    // don't really need a save button.. !!!
    console.log(this.state);
  }
  render() {
    const { name, position, email, number, photo } = this.state;
    return (
      <div>
        <Personal
          value={this.state}
          save={this.saveCard}
          change={this.handleChange}
        />
        <div className="card">
          <h1>Name: {name}</h1>
          <h2>Position: {position}</h2>
          <h3>Phone: {number}</h3>
          <h3>Email: {email}</h3>
          <div>Photo: {photo}</div>
          <button onClick={() => this.editCard()}>Edit</button>
        </div>
        <Work />
      </div>
    );
  }
}

export default Card;

// if (!(edit)) {
//     return (

//     )}
//     return (

//     </div>
