import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

const Edit = (props) => {
    const { data, work, ed, save, changeP, changeW, changeE } = props;
    return (
      <div className="editContent">
        <Personal data={data} save={save} change={changeP} />
        <Work data={work} change={changeW} />
        <Education data={ed} change={changeE} />
      </div>
    );
  }

export default Edit;
