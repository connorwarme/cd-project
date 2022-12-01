import React from "react";
import Input from "./Input";
import Personal from "./Personal";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personal: {
                name: 'Connor',
                position: 'Junior Developer',
                number: '1234567890',
                email: 'connor.warme@gmail.com',
                photo: '',
            },
            edit: false,
        }
        this.editCard = this.editCard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveCard = this.saveCard.bind(this);
    }
    editCard() {
        this.setState({
            edit: true,
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.name)
    }
    saveCard(e) {
        e.preventDefault();
        this.setState({
            personal: {
                name: 'false',
            }
        })
        console.log(this.state.personal);
    }
    render() {
        const { personal } = this.state;
        const { name, position, email, number, photo } = personal;
        return (
            <div>
                <Personal value={personal} save={this.saveCard} change={this.handleChange}/>
                <div className="card">
                    <h1>Name: {name}</h1>
                    <h2>Position: {position}</h2>
                    <h3>Phone: {number}</h3>
                    <h3>Email: {email}</h3>
                    <div>Photo: {photo}</div>
                    <button onClick={()=>this.editCard()}>Edit</button>
                </div>
            </div>
        )
    }
}

export default Card;


// if (!(edit)) {
//     return (

//     )}
//     return (
//         <div className="card">
//         <form onSubmit={this.saveCard}>
//             <Input type="text" name="name" value={name} edit={this.handleChange} />
//             <Input type="text" name="position" value={position} edit={this.handleChange} />
//             <Input type="tel" name="number" value={number} edit={this.handleChange} />
//             <Input type="email" name="email" value={email} edit={this.handleChange} />
//             <Input type="file" name="photo" value={photo} edit={this.handleChange} />
//             <button type="submit">Save</button>
//         </form>
//     </div>