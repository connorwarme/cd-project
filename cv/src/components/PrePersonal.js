import React from "react";

// preview personal details
class PrePersonal extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div>
            <div>Preview Personal</div>
                <div className="preview-header">
                    <div className="preview-name-container">
                        <div className="preview-name">{data.name}</div>
                        <div className="preview-position">{data.position}</div>
                    </div>
                    <div className="preview-personal-container">
                        <div>{data.number}</div>
                        <div>{data.email}</div>
                        <div>{data.location}</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PrePersonal;