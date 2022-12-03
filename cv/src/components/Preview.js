import React from "react";

class Preview extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                <h1>{data.name}</h1>
                <h3>{data.position}</h3>
                <h3>{data.number}</h3>
                <h3>{data.email}</h3>
                <h3>{data.photo}</h3>
                <h3>{data.about}</h3>
                <h3>{data.title}</h3>
                <h3>{data.company}</h3>
                <h3>{data.start}</h3>
                <h3>{data.finish}</h3>
                <h3>{data.details}</h3>
                {
                    data.unistack.map(uni => <h5>{uni.school}</h5>)
                    }
            </div>
        )
    }
}

export default Preview;