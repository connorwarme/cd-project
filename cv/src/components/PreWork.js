import React from "react";

// preview work experience unit
class PreWork extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="preview-work-unit">
                <div className="preview-wu-header">
                    <div className="preview-wu-title">{data.title}</div>
                    <div className="preview-wu-info">
                        <div>{data.company}</div>
                        <div>|</div>
                        <div>{data.start} - {data.finish}</div>
                    </div>
                </div>
                <div className="preview-wu-details">{data.details}</div>
            </div>
        )
    }
}

export default PreWork;