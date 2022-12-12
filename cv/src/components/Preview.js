import React from "react";
import PrePersonal from "./PrePersonal";
import PreWork from "./PreWork";
import PreEd from "./PreEd";
import "../styles/Preview.css";

const Preview = (props) => {
    const { data, work, ed } = props;
    return (
      <div className="previewContent">
        <PrePersonal data={data} />
        <div className="preview-work-header">Work Experience</div>
        {work.map((workUnit) => {
          return <PreWork key={workUnit.id} data={workUnit} />;
        })}
        <div className="preview-education-header">Education</div>
        {ed.map((school) => {
          return <PreEd key={school.id} data={school} />;
        })}
      </div>
    );
  }

export default Preview;
