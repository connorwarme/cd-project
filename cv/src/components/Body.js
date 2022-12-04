import React from "react";
import Edit from "./Edit";
import Preview from "./Preview";
import "../styles/Body.css";

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Connor',
            position: 'Software Engineer',
            number: '1234567890',
            email: 'connor.warme@gmail.com',
            location: 'Phoenix, AZ',
            photo: '',
            bio: '',
            title: 'Software Developer',
            company: 'MadeItUp',
            start: '2019',
            finish: '2022',
            details: 'I aint sure about this',
            school: '',
            degree: '',
            begin: '',
            end: '',
            workstack: [],
            unistack: [],
    }
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.handleUniChange = this.handleUniChange.bind(this);
}
handlePersonalChange(e) {
    this.setState({
        [e.target.name]: e.target.value,
    })
}
saveCard(e) {
    e.preventDefault();
    // don't really need a save button.. !!!
    console.log(this.state);
}
handleUniChange(updatedArray) {
    this.setState({
        unistack: updatedArray,
    })
}

    render() {
        return (
            <div className="container">
                <Edit data={this.state} save={this.saveCard} changeP={this.handlePersonalChange} changeU={this.handleUniChange}/>
                
                <Preview data={this.state}/>
            </div>
        )
    }
}

export default Body;