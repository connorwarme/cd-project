import React from "react";
import Input from "./Input";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Connor',
            address: 'Flagstaff Way',
            number: '765',
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
        console.log(e.key);
        this.setState({
            name: e.target.value,
        })
    }
    saveCard(e) {
        e.preventDefault();
        this.setState({
            edit: false,
        })
    }
    render() {
        const { name, address, number, edit } = this.state;
        if (!(edit)) {
        return (
            <div className="card">
                <h1>Name: {name}</h1>
                <h3>Address: {address}</h3>
                <h3>Phone: {number}</h3>
                <button onClick={()=>this.editCard()}>Edit</button>
            </div>
        )}
        return (
            <div className="card">
            <form onSubmit={this.saveCard}>
                <Input value={name} edit={this.handleChange} />
                <input type="text" placeholder={address}></input>
                <input type="text" placeholder={number}></input>
                <button type="submit">Save</button>
            </form>
        </div>
        )
    }
}

export default Card;