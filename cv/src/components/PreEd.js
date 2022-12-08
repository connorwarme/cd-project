import React from "react";

// preview education unit
class PreEd extends React.Component {
    constructor(props) {
        super(props)
        this.createSlash = this.createSlash.bind(this)
        this.createDash = this.createDash.bind(this)
    }
    createSlash(input) {
        if (input.location.length > 0 && (input.from.length > 0 || input.to.length > 0)) {
            return <div> | </div>
        }
    }
    createDash(input) {
        if (input.from.length > 0 && input.to.length > 0) {
            return <div>{input.from} - {input.to}</div>
        }
        return <div>{input.from} {input.to}</div>
    }
    render() {
        const { data } = this.props;
        return (
            <div className="preview-ed-unit">
                <div className="preview-edu-header">
                    <div className="preview-edu-school">{data.school}</div>
                    <div className="preview-edu-info">
                        <div>{data.location}</div>
                        <div>{this.createSlash(data)}</div>
                        <div>{this.createDash(data)}</div>
                    </div>
                </div>
                <div className="preview-edu-degree">{data.degree}</div>
                <div className="preview-edu-details">{data.details}</div>
            </div>
        )
    }
}

export default PreEd;