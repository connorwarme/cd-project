import React from "react";
import Edit from "./Edit";
import Preview from "./Preview";
import { ReactToPrint } from "react-to-print";
import Print from "./Print";
import "../styles/Body.css";

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Connor Warme',
            position: 'Software Engineer',
            number: '1234567890',
            email: 'connor.warme@gmail.com',
            location: 'Phoenix, AZ',
            github: '',
            linkedin: '',
            bio: '',
            title: 'Software Developer',
            company: 'MadeItUp',
            start: '2019',
            finish: '2022',
            details: 'I aint sure about this',
            workstack: [],
            unistack: [],
    }
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleUniChange = this.handleUniChange.bind(this);
}
handlePersonalChange(e) {
    this.setState({
        [e.target.id]: e.target.value,
    })
}
saveCard(e) {
    e.preventDefault();
    // don't really need a save button.. !!!
    console.log(this.state);
}
handleWorkChange(updatedArray) {
    this.setState({
        workstack: updatedArray,
    })
}
handleUniChange(updatedArray) {
    this.setState({
        unistack: updatedArray,
    })
}

    render() {
        return (
            <div className="container">
                <Edit data={this.state} save={this.saveCard} changeP={this.handlePersonalChange} changeU={this.handleUniChange} changeW={this.handleWorkChange}/>
                <Print data={this.state}/>
            </div>
        )
    }
}

export default Body;