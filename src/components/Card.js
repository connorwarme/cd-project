import React from "react";
import Input from "./Input";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Connor',
            position: 'Senior Developer',
            number: '1234567890',
            email: 'connor.warme@gmail.com',
            edit: false,
        }
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
    }
    saveCard(e) {
        e.preventDefault();
        this.setState({
            edit: false,
        })
    }
    render() {
        const { name, position, email, number, edit } = this.state;
        if (!(edit)) {
        return (
            <div className="card">
                <h1>Name: {name}</h1>
                <h2>Position: {position}</h2>
                <h3>Phone: {number}</h3>
                <h3>Email: {email}</h3>
                <button onClick={()=>this.editCard()}>Edit</button>
            </div>
        )}
        return (
            <div className="card">
            <form onSubmit={this.saveCard}>
                <Input type="text" name="name" value={name} edit={this.handleChange} />
                <Input type="text" name="position" value={position} edit={this.handleChange} />
                <Input type="tel" name="number" value={number} edit={this.handleChange} />
                <Input type="email" name="email" value={email} edit={this.handleChange} />
                <button type="submit">Save</button>
            </form>
        </div>
        )
    }
}

export default Card;