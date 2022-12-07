import React from "react";

// preview education unit
class PreEd extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="preview-ed-unit">
                <div className="preview-edu-header">
                    <div className="preview-edu-info">{data.school}</div>
                    <div className="preview-edu-details">
                        <div>{data.location} |</div>
                        <div>{data.from} - {data.to}</div>
                    </div>
                </div>
                <div className="preview-edu-degree">{data.degree}</div>
                <div className="preview-edu-details">{data.details}</div>
            </div>
        )
    }
}

export default PreEd;