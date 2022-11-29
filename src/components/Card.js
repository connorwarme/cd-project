import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div>Name</div>
                <div>Address</div>
                <div>City</div>
                <div>State</div>
                <div>Zip</div>
            </div>
        )
    }
}

export default Card;