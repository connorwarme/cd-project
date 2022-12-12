import React from "react";

// preview education unit
const PreEd = (props) => {
  console.log(props);
  const createSlash = (input) => {
    if (
      input.location.length > 0 &&
      (input.from.length > 0 || input.to.length > 0)
    ) {
      return <div> | </div>;
    }
  }
  const createDash = (input) => {
    if (input.from.length > 0 && input.to.length > 0) {
      return (
        <div>
          {input.from} - {input.to}
        </div>
      );
    }
    return (
      <div>
        {input.from} {input.to}
      </div>
    );
  }
    const { data } = props;
    return (
      <div className="preview-ed-unit">
        <div className="preview-edu-degree">{data.degree}</div>
        <div className="preview-edu-header">
          <div className="preview-edu-school">{data.school}</div>
          <div className="preview-edu-info">
            <div>{data.location}</div>
            <div>{createSlash(data)}</div>
            <div>{createDash(data)}</div>
          </div>
        </div>
        <div className="preview-edu-details">{data.details}</div>
      </div>
    );
  }

export default PreEd;
