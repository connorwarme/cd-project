import React from "react";

// preview work experience unit
const PreWork = (props) => {
  const createSlash = (input) => {
    if (
      input.company.length > 0 &&
      (input.start.length > 0 || input.finish.length > 0)
    ) {
      return <div> | </div>;
    }
  }
  const createDash = (input) => {
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
    const { data } = props;
    return (
      <div className="preview-work-unit">
        <div className="preview-wu-title">{data.title}</div>
        <div className="preview-wu-header">
          <div className="preview-wu-company">{data.company}</div>
          <div className="preview-wu-info">
            <div>{data.location}</div>
            <div>{createSlash(data)}</div>
            <div>{createDash(data)}</div>
          </div>
        </div>
        <div className="preview-wu-details">{data.details}</div>
      </div>
    );
  }

export default PreWork;
