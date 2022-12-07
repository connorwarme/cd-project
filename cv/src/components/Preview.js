import React from "react";
import PrePersonal from "./PrePersonal";
import PreWork from "./PreWork";
import PreEd from "./PreEd";
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
                <div className="preview-work-header">Work Experience</div>
                {data.workstack.map(work => {
                    return <PreWork key={work.id} data={work} />
                })}
                <div className="preview-education-header">Education</div>
                {data.unistack.map(school => {
                    return <PreEd key={school.id} data={school} />
                })}
            </div>
        )
    }
}

export default Preview;