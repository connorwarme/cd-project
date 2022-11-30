import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Connor',
            address: '',
            number: '765',
            edit: false,
        }
    }
    editCard() {
        this.setState({
            edit: true,
        })
    }
    render() {
        if (!(this.state.edit)) {
        return (
            <div className="card">
                <h1>Name: {this.state.name}</h1>
                <h3>Address: {this.state.address}</h3>
                <h3>Phone: {this.state.number}</h3>
                <button onClick={()=>this.editCard()}>Edit</button>
            </div>
        )}
        return (
            <div className="card">
                <input type="text" placeholder={this.state.name}></input>
                <input type="text" placeholder={this.state.address}></input>
                <input type="text" placeholder={this.state.number}></input>
            <button onClick={()=>this.changeMessage()}>Save</button>
        </div>
        )
    }
}

export default Card;