import React from "react";

// preview work experience unit
class PreWork extends React.Component {
  constructor(props) {
    super(props);
    this.createSlash = this.createSlash.bind(this);
    this.createDash = this.createDash.bind(this);
  }
  createSlash(input) {
    if (
      input.company.length > 0 &&
      (input.start.length > 0 || input.finish.length > 0)
    ) {
      return <div> | </div>;
    }
  }
  createDash(input) {
    if (input.start.length > 0 && input.finish.length > 0) {
      return (
        <div>
          {input.start} - {input.finish}
        </div>
      );
    }
    return (
      <div>
        {input.start} {input.finish}
      </div>
    );
  }
  render() {
    const { data } = this.props;
    return (
      <div className="preview-work-unit">
        <div className="preview-wu-header">
          <div className="preview-wu-title">{data.title}</div>
          <div className="preview-wu-info">
            <div>{data.company}</div>
            <div>{this.createSlash(data)}</div>
            <div>{this.createDash(data)}</div>
          </div>
        </div>
        <div className="preview-wu-details">{data.details}</div>
      </div>
    );
  }
}

export default PreWork;
