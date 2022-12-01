import React from "react";
import Edit from "./Edit";
import Preview from "./Preview";

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Connor',
            position: 'Software Engineer',
            number: '1234567890',
            email: 'connor.warme@gmail.com',
            photo: '',
            about: '',
            title: 'Software Developer',
            company: 'MadeItUp',
            location: 'North Wales',
            start: '2019',
            finish: '2022',
            details: 'I aint sure about this',
            school: '',
            degree: '',
            begin: '',
            end: '',
    }
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    // this.handleWorkChange = this.handleWorkChange.bind(this);
    // this.handleUniChange = this.handleUniChange.bind(this);
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
// handleWorkChange(input) {
//     this.setState({
//         works: this.state.works.concat(input),
//     })
// }
// handleUniChange(input) {
//     this.setState({
//         unis: this.state.unis.concat(input),
//     })
// }

    render() {
        return (
            <div>
                <Edit data={this.state} save={this.saveCard} changeP={this.handlePersonalChange}/>
                
                <Preview />
            </div>
        )
    }
}

export default Body;