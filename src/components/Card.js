import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     name: 'Connor',
        //     address: 'Long Branch',
        //     city: '',
        //     state: '',
        //     zip: '',
        // }
    }
    render() {
        const { fullname, address, city, state, zip } = this.props;
        return (
            <div className="card">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip" />
            </div>
        )
    }
}

export default Card;