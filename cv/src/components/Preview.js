import React from "react";
import PrePersonal from "./PrePersonal";
import "../styles/Preview.css"

class Preview extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data } = this.props;
        return (
            <div className="previewContent">
                <PrePersonal data={data} />
                <h1>{data.name}</h1>
                <h3>{data.position}</h3>
                <h3>{data.number}</h3>
                <h3>{data.email}</h3>
                <h3>{data.photo}</h3>
                <h3>{data.bio}</h3>
                <h3>{data.title}</h3>
                <h3>{data.company}</h3>
                <h3>{data.start}</h3>
                <h3>{data.finish}</h3>
                <h3>{data.details}</h3>
                {
                    data.unistack.map(uni => {
                        return <h5 key={uni.id}>{uni.school}</h5>
                })
                    }
            </div>
        )
    }
}

export default Preview;